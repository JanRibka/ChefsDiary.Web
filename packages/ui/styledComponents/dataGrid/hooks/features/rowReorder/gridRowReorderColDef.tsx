import { GRID_STRING_COL_DEF } from "../../../colDef/gridStringColDef";
import { renderRowReorderCell } from "../../../components/GridRowReorderCell";
import { GridColDef } from "../../../models/colDef/gridColDef";

export const GRID_REORDER_COL_DEF: GridColDef = {
  ...GRID_STRING_COL_DEF,
  field: "__reorder__",
  type: "reorder",
  sortable: false,
  filterable: false,
  width: 50,
  align: "center",
  headerAlign: "center",
  disableColumnMenu: true,
  disableExport: true,
  disableReorder: true,
  resizable: false,
  // @ts-ignore
  aggregable: false,
  renderHeader: () => " ",
  renderCell: renderRowReorderCell,
};
