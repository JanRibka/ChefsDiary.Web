import {
  isValidElement,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
} from "react";

import { GridApi } from "../../../models/api/gridApi";
import { useGridSelector } from "../../../models/api/useGridSelector";
import { GridEventListener } from "../../../models/events/gridEventListener";
import { GridRowId } from "../../../models/gridRows";
import { GridCellParams } from "../../../models/params/gridCellParams";
import { DataGridProcessedProps } from "../../../models/props/gridProps";
import { GridPipeProcessor } from "../../core/pipeProcessing/gridPipeProcessingApi";
import { useGridRegisterPipeProcessor } from "../../core/pipeProcessing/useGridRegisterPipeProcessor";
import { useGridApiEventHandler } from "../../utils/useGridApiEventHandler";
import { useGridApiMethod } from "../../utils/useGridApiMethod";
import { GridStateInitializer } from "../../utils/useGridInitializeState";
import { gridRowIdsSelector } from "../rows/gridRowsSelector";
import {
  GridDetailPanelApi,
  GridDetailPanelState,
} from "./gridDetailPanelInterface";
import {
  gridDetailPanelExpandedRowIdsSelector,
  gridDetailPanelExpandedRowsContentCacheSelector,
  gridDetailPanelExpandedRowsHeightCacheSelector,
  gridDetailPanelRawHeightCacheSelector,
} from "./gridDetailPanelSelector";
import { GRID_DETAIL_PANEL_TOGGLE_FIELD } from "./gridDetailPanelToggleColDef";

export const detailPanelStateInitializer: GridStateInitializer<
  Pick<DataGridProcessedProps, "initialState" | "detailPanelExpandedRowIds">
> = (state, props) => {
  return {
    ...state,
    detailPanel: {
      heightCache: {},
      expandedRowIds:
        props.detailPanelExpandedRowIds ??
        props.initialState?.detailPanel?.expandedRowIds ??
        [],
    },
  };
};

function cacheContentAndHeight(
  apiRef: React.MutableRefObject<GridApi>,
  getDetailPanelContent: DataGridProcessedProps["getDetailPanelContent"],
  getDetailPanelHeight: DataGridProcessedProps["getDetailPanelHeight"],
  previousHeightCache: GridDetailPanelState["heightCache"]
) {
  if (typeof getDetailPanelContent !== "function") {
    return {};
  }

  // TODO change to lazy approach using a Proxy
  // only call getDetailPanelContent when asked for an id
  const rowIds = gridRowIdsSelector(apiRef);
  const contentCache = rowIds.reduce<
    Record<GridRowId, ReturnType<typeof getDetailPanelContent>>
  >((acc, id) => {
    const params = apiRef.current.getRowParams(id);
    acc[id] = getDetailPanelContent(params);
    return acc;
  }, {});

  const heightCache = rowIds.reduce<GridDetailPanelState["heightCache"]>(
    (acc, id) => {
      if (contentCache[id] == null) {
        return acc;
      }
      const params = apiRef.current.getRowParams(id);
      const height = getDetailPanelHeight(params);
      const autoHeight = height === "auto";
      acc[id] = {
        autoHeight,
        height: autoHeight ? previousHeightCache[id]?.height : height,
      };
      return acc;
    },
    {}
  );

  return { contentCache, heightCache };
}

export const useGridDetailPanel = (
  apiRef: React.MutableRefObject<GridApi>,
  props: Pick<
    DataGridProcessedProps,
    | "getDetailPanelContent"
    | "getDetailPanelHeight"
    | "detailPanelExpandedRowIds"
    | "onDetailPanelExpandedRowIdsChange"
  >
): void => {
  const expandedRowIds = useGridSelector(
    apiRef,
    gridDetailPanelExpandedRowIdsSelector
  );
  const contentCache = useGridSelector(
    apiRef,
    gridDetailPanelExpandedRowsContentCacheSelector
  );

  const handleCellClick = useCallback<GridEventListener<"cellClick">>(
    (params: GridCellParams, event: MouseEvent) => {
      if (
        params.field !== GRID_DETAIL_PANEL_TOGGLE_FIELD ||
        props.getDetailPanelContent == null
      ) {
        return;
      }

      const content = contentCache[params.id];
      if (!isValidElement(content)) {
        return;
      }

      // Ignore if the user didn't click specifically in the "i" button
      if (event.target === event.currentTarget) {
        return;
      }

      apiRef.current.toggleDetailPanel(params.id);
    },
    [apiRef, contentCache, props.getDetailPanelContent]
  );

  const handleCellKeyDown = useCallback<GridEventListener<"cellKeyDown">>(
    (params, event) => {
      if (props.getDetailPanelContent == null) {
        return;
      }

      if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
        // TODO v6: only support Space on the detail toggle
        apiRef.current.toggleDetailPanel(params.id);
        return;
      }

      if (
        params.field === GRID_DETAIL_PANEL_TOGGLE_FIELD &&
        event.key === " "
      ) {
        apiRef.current.toggleDetailPanel(params.id);
      }
    },
    [apiRef, props.getDetailPanelContent]
  );

  useGridApiEventHandler(apiRef, "cellClick", handleCellClick);
  useGridApiEventHandler(apiRef, "cellKeyDown", handleCellKeyDown);

  apiRef.current.unstable_registerControlState({
    stateId: "detailPanels",
    propModel: props.detailPanelExpandedRowIds,
    propOnChange: props.onDetailPanelExpandedRowIdsChange,
    stateSelector: gridDetailPanelExpandedRowIdsSelector,
    changeEvent: "detailPanelsExpandedRowIdsChange",
  });

  const toggleDetailPanel = useCallback<
    GridDetailPanelApi["toggleDetailPanel"]
  >(
    (id: GridRowId) => {
      if (props.getDetailPanelContent == null) {
        return;
      }

      const content = contentCache[id];
      if (!isValidElement(content)) {
        return;
      }

      const ids = apiRef.current.getExpandedDetailPanels();
      apiRef.current.setExpandedDetailPanels(
        ids.includes(id) ? ids.filter((rowId) => rowId !== id) : [...ids, id]
      );
    },
    [apiRef, contentCache, props.getDetailPanelContent]
  );

  const getExpandedDetailPanels = useCallback<
    GridDetailPanelApi["getExpandedDetailPanels"]
  >(
    () => gridDetailPanelExpandedRowIdsSelector(apiRef.current.state),
    [apiRef]
  );

  const setExpandedDetailPanels = useCallback<
    GridDetailPanelApi["setExpandedDetailPanels"]
  >(
    (ids) => {
      apiRef.current.setState((state) => {
        return {
          ...state,
          detailPanel: {
            ...state.detailPanel,
            expandedRowIds: ids,
          },
        };
      });
      apiRef.current.forceUpdate();
    },
    [apiRef]
  );

  const storeDetailPanelHeight = useCallback<
    GridDetailPanelApi["unstable_storeDetailPanelHeight"]
  >(
    (id, height) => {
      const heightCache = gridDetailPanelRawHeightCacheSelector(
        apiRef.current.state
      );

      if (!heightCache[id] || heightCache[id].height === height) {
        return;
      }

      apiRef.current.setState((state) => {
        return {
          ...state,
          detailPanel: {
            ...state.detailPanel,
            heightCache: {
              ...heightCache,
              [id]: { ...heightCache[id], height },
            },
          },
        };
      });

      apiRef.current.unstable_requestPipeProcessorsApplication("rowHeight");
    },
    [apiRef]
  );

  const detailPanelHasAutoHeight = useCallback<
    GridDetailPanelApi["unstable_detailPanelHasAutoHeight"]
  >(
    (id) => {
      const heightCache = gridDetailPanelRawHeightCacheSelector(
        apiRef.current.state
      );
      return heightCache[id] ? heightCache[id].autoHeight : false;
    },
    [apiRef]
  );

  const detailPanelApi: GridDetailPanelApi = {
    toggleDetailPanel,
    getExpandedDetailPanels,
    setExpandedDetailPanels,
    unstable_storeDetailPanelHeight: storeDetailPanelHeight,
    unstable_detailPanelHasAutoHeight: detailPanelHasAutoHeight,
  };
  useGridApiMethod(apiRef, detailPanelApi, "detailPanelApi");

  useEffect(() => {
    if (props.detailPanelExpandedRowIds) {
      const currentModel = gridDetailPanelExpandedRowIdsSelector(
        apiRef.current.state
      );
      if (currentModel !== props.detailPanelExpandedRowIds) {
        apiRef.current.setExpandedDetailPanels(props.detailPanelExpandedRowIds);
      }
    }
  }, [apiRef, props.detailPanelExpandedRowIds]);

  const updateCachesAndForceUpdate = useCallback(() => {
    apiRef.current.setState((state) => {
      return {
        ...state,
        detailPanel: {
          ...state.detailPanel,
          ...cacheContentAndHeight(
            apiRef,
            props.getDetailPanelContent,
            props.getDetailPanelHeight,
            state.detailPanel.heightCache
          ),
        },
      };
    });
    apiRef.current.forceUpdate();
  }, [apiRef, props.getDetailPanelContent, props.getDetailPanelHeight]);

  useGridApiEventHandler(apiRef, "sortedRowsSet", updateCachesAndForceUpdate);

  const previousGetDetailPanelContentProp =
    useRef<DataGridProcessedProps["getDetailPanelContent"]>();
  const previousGetDetailPanelHeightProp =
    useRef<DataGridProcessedProps["getDetailPanelHeight"]>();

  const updateCachesIfNeeded = useCallback(() => {
    if (
      props.getDetailPanelContent ===
        previousGetDetailPanelContentProp.current &&
      props.getDetailPanelHeight === previousGetDetailPanelHeightProp.current
    ) {
      return;
    }

    apiRef.current.setState((state) => {
      return {
        ...state,
        detailPanel: {
          ...state.detailPanel,
          ...cacheContentAndHeight(
            apiRef,
            props.getDetailPanelContent,
            props.getDetailPanelHeight,
            state.detailPanel.heightCache
          ),
        },
      };
    });

    previousGetDetailPanelContentProp.current = props.getDetailPanelContent;
    previousGetDetailPanelHeightProp.current = props.getDetailPanelHeight;
  }, [apiRef, props.getDetailPanelContent, props.getDetailPanelHeight]);

  const addDetailHeight = useCallback<GridPipeProcessor<"rowHeight">>(
    (initialValue, row) => {
      if (
        !expandedRowIds ||
        expandedRowIds.length === 0 ||
        !expandedRowIds.includes(row.id)
      ) {
        return { ...initialValue, detail: 0 };
      }

      updateCachesIfNeeded();

      const heightCache =
        gridDetailPanelExpandedRowsHeightCacheSelector(apiRef);

      return {
        ...initialValue,
        detail: heightCache[row.id] ?? 0, // Fallback to zero because the cache might not be ready yet (e.g. page was changed)
      };
    },
    [apiRef, expandedRowIds, updateCachesIfNeeded]
  );

  useGridRegisterPipeProcessor(apiRef, "rowHeight", addDetailHeight);

  const isFirstRender = useRef(true);
  if (isFirstRender.current) {
    isFirstRender.current = false;
    updateCachesIfNeeded();
  }
};
