import { AppDataGridBaseProps } from "../../props/AppDataGridProps";
import { GridValidRowModel } from "../types/gridRows";
import TableRowDefinition from "./TableRowDefinition";

interface DataGridBodyProps<R extends GridValidRowModel = any>
  extends AppDataGridBaseProps<R> {
  rows: TableRowDefinition[];
}

export default DataGridBodyProps;
