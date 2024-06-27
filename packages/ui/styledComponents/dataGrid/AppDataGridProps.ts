import { TableOptions } from "@tanstack/react-table";

interface AppDataGridProps<T>
  extends Pick<
    TableOptions<T>,
    "columns" | "data" | "columnResizeMode" | "columnResizeDirection"
  > {
  className?: string;
  serverSideSorting?: boolean;
}

export default AppDataGridProps;
