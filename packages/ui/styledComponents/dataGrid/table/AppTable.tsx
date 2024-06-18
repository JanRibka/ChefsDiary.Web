import { mergeStyles } from "@repo/shared/helpers";
import { Table } from "@tanstack/react-table";

import AppTableHead from "../tableHead/AppTableHead";

interface AppTableProps<T> {
  className?: string;
  table: Table<T>;
}

const AppTable = <T extends object>(props: AppTableProps<T>) => {
  const { table, className } = props;

  return (
    <table className={mergeStyles("", className)}>
      {<AppTableHead<T> table={table} />}
    </table>
  );
};

export default AppTable;
