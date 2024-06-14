import { useCallback } from "react";

import {
  GRID_CHECKBOX_SELECTION_COL_DEF,
  GRID_CHECKBOX_SELECTION_FIELD,
} from "../../../colDef/gridCheckboxSelectionColDef";
import { GridApiCommunity } from "../../../models/api/gridApiCommunity";
import { GridColDef } from "../../../models/colDef/gridColDef";
import { DataGridProcessedProps } from "../../../models/props/gridProps";
import { GridPipeProcessor } from "../../core/pipeProcessing/gridPipeProcessingApi";
import { useGridRegisterPipeProcessor } from "../../core/pipeProcessing/useGridRegisterPipeProcessor";

// type OwnerState = { classes: DataGridProcessedProps["classes"] };

// const useUtilityClasses = (ownerState: OwnerState) => {
//   const { classes } = ownerState;

//   return useMemo(() => {
//     const slots = {
//       cellCheckbox: ["cellCheckbox"],
//       columnHeaderCheckbox: ["columnHeaderCheckbox"],
//     };

//     return composeClasses(slots, getDataGridUtilityClass, classes);
//   }, [classes]);
// };

export const useGridSelectionPreProcessors = (
  apiRef: React.MutableRefObject<GridApiCommunity>,
  props: DataGridProcessedProps
) => {
  // const ownerState = { classes: props.classes };
  // const classes = useUtilityClasses(ownerState);

  const updateSelectionColumn = useCallback<
    GridPipeProcessor<"hydrateColumns">
  >(
    (columnsState) => {
      const selectionColumn: GridColDef = {
        ...GRID_CHECKBOX_SELECTION_COL_DEF,
        // cellClassName: classes.cellCheckbox,
        // headerClassName: classes.columnHeaderCheckbox,
        headerName: apiRef.current.getLocaleText("checkboxSelectionHeaderName"),
      };

      const shouldHaveSelectionColumn = props.checkboxSelection;
      const haveSelectionColumn =
        columnsState.lookup[GRID_CHECKBOX_SELECTION_FIELD] != null;

      if (shouldHaveSelectionColumn && !haveSelectionColumn) {
        columnsState.lookup[GRID_CHECKBOX_SELECTION_FIELD] = selectionColumn;
        columnsState.all = [GRID_CHECKBOX_SELECTION_FIELD, ...columnsState.all];
      } else if (!shouldHaveSelectionColumn && haveSelectionColumn) {
        delete columnsState.lookup[GRID_CHECKBOX_SELECTION_FIELD];
        columnsState.all = columnsState.all.filter(
          (field) => field !== GRID_CHECKBOX_SELECTION_FIELD
        );
      } else if (shouldHaveSelectionColumn && haveSelectionColumn) {
        columnsState.lookup[GRID_CHECKBOX_SELECTION_FIELD] = {
          ...selectionColumn,
          ...columnsState.lookup[GRID_CHECKBOX_SELECTION_FIELD],
        };
      }

      return columnsState;
    },
    [apiRef, props.checkboxSelection]
    // [apiRef, classes, props.checkboxSelection]
  );

  useGridRegisterPipeProcessor(apiRef, "hydrateColumns", updateSelectionColumn);
};
