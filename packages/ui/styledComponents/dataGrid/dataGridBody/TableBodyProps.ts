import { AppDataGridBaseProps } from "../../props/AppDataGridProps";
import { GridRowsProp, GridValidRowModel } from "../types/gridRows";

interface DataGridBodyProps<R extends GridValidRowModel = any>
  extends AppDataGridBaseProps<R> {
  rows: GridRowsProp<R>;
}

export default DataGridBodyProps;
