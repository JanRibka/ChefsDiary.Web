import { useCallback, useEffect, useRef } from "react";

import { GRID_CHECKBOX_SELECTION_FIELD } from "../../../colDef/gridCheckboxSelectionColDef";
import { GridTreeDataGroupingCell } from "../../../components/GridTreeDataGroupingCell";
import { GridApi } from "../../../models/api/gridApi";
import { GridColDef } from "../../../models/colDef/gridColDef";
import {
  GridGroupingColDefOverride,
  GridGroupingColDefOverrideParams,
} from "../../../models/gridGroupingColDefOverride";
import { DataGridProcessedProps } from "../../../models/props/gridProps";
import {
  buildRowTree,
  BuildRowTreeGroupingCriteria,
} from "../../../utils/tree/buildRowTree";
import { sortRowTree } from "../../../utils/tree/sortRowTree";
import { GridPipeProcessor } from "../../core/pipeProcessing/gridPipeProcessingApi";
import { useGridRegisterPipeProcessor } from "../../core/pipeProcessing/useGridRegisterPipeProcessor";
import { GridStrategyProcessor } from "../../core/strategyProcessing/gridStrategyProcessingApi";
import { useGridRegisterStrategyProcessor } from "../../core/strategyProcessing/useGridRegisterStrategyProcessor";
import { useFirstRender } from "../../utils/useFirstRender";
import {
  gridRowIdsSelector,
  gridRowTreeSelector,
} from "../rows/gridRowsSelector";
import {
  GRID_TREE_DATA_GROUPING_COL_DEF,
  GRID_TREE_DATA_GROUPING_COL_DEF_FORCED_PROPERTIES,
} from "./gridTreeDataGroupColDef";
import {
  filterRowTreeFromTreeData,
  TREE_DATA_STRATEGY,
} from "./gridTreeDataUtils";

export const useGridTreeDataPreProcessors = (
  apiRef: React.MutableRefObject<GridApi>,
  props: Pick<
    DataGridProcessedProps,
    | "treeData"
    | "groupingColDef"
    | "getTreeDataPath"
    | "disableChildrenSorting"
    | "disableChildrenFiltering"
    | "defaultGroupingExpansionDepth"
    | "isGroupExpandedByDefault"
  >
) => {
  const setStrategyAvailability = useCallback(() => {
    apiRef.current.unstable_setStrategyAvailability(
      "rowTree",
      TREE_DATA_STRATEGY,
      props.treeData ? () => true : () => false
    );
  }, [apiRef, props.treeData]);

  const getGroupingColDef = useCallback(() => {
    const groupingColDefProp = props.groupingColDef;

    let colDefOverride: GridGroupingColDefOverride | null | undefined;
    if (typeof groupingColDefProp === "function") {
      const params: GridGroupingColDefOverrideParams = {
        groupingName: TREE_DATA_STRATEGY,
        fields: [],
      };

      colDefOverride = groupingColDefProp(params);
    } else {
      colDefOverride = groupingColDefProp;
    }

    const { hideDescendantCount, ...colDefOverrideProperties } =
      colDefOverride ?? {};

    const commonProperties: Omit<GridColDef, "field" | "editable"> = {
      ...GRID_TREE_DATA_GROUPING_COL_DEF,
      renderCell: (params) => (
        <GridTreeDataGroupingCell
          {...params}
          hideDescendantCount={hideDescendantCount}
        />
      ),
      headerName: apiRef.current.getLocaleText("treeDataGroupingHeaderName"),
    };

    return {
      ...commonProperties,
      ...colDefOverrideProperties,
      ...GRID_TREE_DATA_GROUPING_COL_DEF_FORCED_PROPERTIES,
    };
  }, [apiRef, props.groupingColDef]);

  const updateGroupingColumn = useCallback<GridPipeProcessor<"hydrateColumns">>(
    (columnsState) => {
      const groupingColDefField =
        GRID_TREE_DATA_GROUPING_COL_DEF_FORCED_PROPERTIES.field;

      const shouldHaveGroupingColumn = props.treeData;
      const prevGroupingColumn = columnsState.lookup[groupingColDefField];

      if (shouldHaveGroupingColumn) {
        const newGroupingColumn = getGroupingColDef();
        if (prevGroupingColumn) {
          newGroupingColumn.width = prevGroupingColumn.width;
          newGroupingColumn.flex = prevGroupingColumn.flex;
        }
        columnsState.lookup[groupingColDefField] = newGroupingColumn;
        if (prevGroupingColumn == null) {
          const index =
            columnsState.all[0] === GRID_CHECKBOX_SELECTION_FIELD ? 1 : 0;
          columnsState.all = [
            ...columnsState.all.slice(0, index),
            groupingColDefField,
            ...columnsState.all.slice(index),
          ];
        }
      } else if (!shouldHaveGroupingColumn && prevGroupingColumn) {
        delete columnsState.lookup[groupingColDefField];
        columnsState.all = columnsState.all.filter(
          (field) => field !== groupingColDefField
        );
      }

      return columnsState;
    },
    [props.treeData, getGroupingColDef]
  );

  const createRowTree = useCallback<GridStrategyProcessor<"rowTreeCreation">>(
    (params) => {
      if (!props.getTreeDataPath) {
        throw new Error("MUI: No getTreeDataPath given.");
      }

      const rows = params.ids
        .map((rowId) => ({
          id: rowId,
          path: props.getTreeDataPath!(params.idRowsLookup[rowId]).map(
            (key): BuildRowTreeGroupingCriteria => ({ key, field: null })
          ),
        }))
        .sort((a, b) => a.path.length - b.path.length);

      return buildRowTree({
        rows,
        ...params,
        defaultGroupingExpansionDepth: props.defaultGroupingExpansionDepth,
        isGroupExpandedByDefault: props.isGroupExpandedByDefault,
        groupingName: TREE_DATA_STRATEGY,
        onDuplicatePath: (firstId, secondId, path) => {
          throw new Error(
            [
              "MUI: The path returned by `getTreeDataPath` should be unique.",
              `The rows with id #${firstId} and #${secondId} have the same.`,
              `Path: ${JSON.stringify(path.map((step) => step.key))}.`,
            ].join("\n")
          );
        },
      });
    },
    [
      props.getTreeDataPath,
      props.defaultGroupingExpansionDepth,
      props.isGroupExpandedByDefault,
    ]
  );

  const filterRows = useCallback<GridStrategyProcessor<"filtering">>(
    (params) => {
      const rowTree = gridRowTreeSelector(apiRef);

      return filterRowTreeFromTreeData({
        rowTree,
        isRowMatchingFilters: params.isRowMatchingFilters,
        disableChildrenFiltering: props.disableChildrenFiltering,
        filterModel: params.filterModel,
        apiRef,
      });
    },
    [apiRef, props.disableChildrenFiltering]
  );

  const sortRows = useCallback<GridStrategyProcessor<"sorting">>(
    (params) => {
      const rowTree = gridRowTreeSelector(apiRef);
      const rowIds = gridRowIdsSelector(apiRef);

      return sortRowTree({
        rowTree,
        rowIds,
        sortRowList: params.sortRowList,
        disableChildrenSorting: props.disableChildrenSorting,
      });
    },
    [apiRef, props.disableChildrenSorting]
  );

  useGridRegisterPipeProcessor(apiRef, "hydrateColumns", updateGroupingColumn);
  useGridRegisterStrategyProcessor(
    apiRef,
    TREE_DATA_STRATEGY,
    "rowTreeCreation",
    createRowTree
  );
  useGridRegisterStrategyProcessor(
    apiRef,
    TREE_DATA_STRATEGY,
    "filtering",
    filterRows
  );
  useGridRegisterStrategyProcessor(
    apiRef,
    TREE_DATA_STRATEGY,
    "sorting",
    sortRows
  );

  /**
   * 1ST RENDER
   */
  useFirstRender(() => {
    setStrategyAvailability();
  });

  /**
   * EFFECTS
   */
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (!isFirstRender.current) {
      setStrategyAvailability();
    } else {
      isFirstRender.current = false;
    }
  }, [setStrategyAvailability]);
};
