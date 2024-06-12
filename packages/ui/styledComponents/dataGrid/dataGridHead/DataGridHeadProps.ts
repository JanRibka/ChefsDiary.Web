import { AppDataGridBaseProps } from "../../props/AppDataGridProps";
import { GridValidRowModel } from "../types/gridRows";

interface DataGridHeadProps<R extends GridValidRowModel = any>
  extends AppDataGridBaseProps<R> {}

export default DataGridHeadProps;
