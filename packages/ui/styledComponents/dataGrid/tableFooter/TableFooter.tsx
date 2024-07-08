import { Table } from "@tanstack/react-table";

import NavigationButtons from "./navigationButtons/NavigationButtons";

interface TableFooterProps<T> {
  table: Table<T>;
}

const TableFooter = <T extends object>(props: TableFooterProps<T>) => {
  // Props
  const { table } = props;

  return (
    <tfoot>
      <div>
        <NavigationButtons table={table} />
        <div></div>
      </div>
    </tfoot>
  );
};

export default TableFooter;
