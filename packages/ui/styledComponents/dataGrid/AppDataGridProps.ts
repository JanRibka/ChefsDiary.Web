import { TableOptions } from "@tanstack/react-table";

import { RowsPerPageProps } from "./tableFooter/rowsPerPage/RowsPerPage";

interface AppDataGridProps<T>
  extends Pick<
      TableOptions<T>,
      "columns" | "data" | "columnResizeMode" | "columnResizeDirection"
    >,
    Pick<RowsPerPageProps<T>, "pageSizeList"> {
  className?: string;
  serverSideSorting?: boolean;
  serverSidePagination?: boolean;
}

export default AppDataGridProps;
