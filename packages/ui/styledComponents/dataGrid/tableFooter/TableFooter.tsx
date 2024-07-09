import { Table } from "@tanstack/react-table";

import NavigationButtons from "./navigationButtons/NavigationButtons";
import RowsPerPage, { RowsPerPageProps } from "./rowsPerPage/RowsPerPage";

interface TableFooterProps<T>
  extends Pick<RowsPerPageProps<T>, "pageSizeList"> {
  table: Table<T>;
}

const TableFooter = <T extends object>(props: TableFooterProps<T>) => {
  // Props
  const { table, pageSizeList } = props;

  if (!pageSizeList || pageSizeList.length === 0) {
    return null;
  }

  return (
    <tfoot>
      <tr className="block p-2">
        <td className="w-full flex flex-row items-center justify-between">
          <NavigationButtons table={table} />
          <RowsPerPage table={table} pageSizeList={pageSizeList} />
        </td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;
