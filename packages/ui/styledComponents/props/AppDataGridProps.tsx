import TableBodyProps from "../dataGrid/dataGridBody/TableBodyProps";
import DataGridColumnDefinition from "../dataGrid/dataGridHead/DataGridColumnDefinition";
import DataGridHeadProps from "../dataGrid/dataGridHead/DataGridHeadProps";
import SearchProps from "../dataGrid/search/SearchProps";
import { GridRowIdGetter, GridValidRowModel } from "../dataGrid/types/gridRows";

interface AppDataGridProps<R extends GridValidRowModel = any>
  extends DataGridHeadProps<R>,
    TableBodyProps<R>,
    SearchProps,
    AppDataGridBaseProps<R> {}

export default AppDataGridProps;

export interface AppDataGridBaseProps<R extends GridValidRowModel = any> {
  name: string;
  columns: DataGridColumnDefinition[];
  getRowId?: GridRowIdGetter<R>;
}
