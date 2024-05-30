import React, { RefAttributes } from "react";

import AppDataGridProps from "./AppDataGridProps";
import Search from "./search/Search";
import TableBody from "./tableBody/TableBody";
import TableHead from "./tableHead/TableHead";

const AppDataGridRaw = (props: AppTableProps) => {
  return (
    <div className="rounded-md border-1 p-4 shadow-md">
      <div className="">
        <Search search={props.search} />
        <div className="rounded-md overflow-hidden">
          <table className="w-full text-sm text-left">
            <TableHead columns={props.columns} name={props.name} />
            <TableBody
              rows={props.rows}
              columns={props.columns}
              name={props.name}
            />
          </table>
        </div>
      </div>
    </div>
  );
};

interface DataGridComponent {
  <R extends GridValidRowModel = any>(
    props: AppDataGridProps<R> & RefAttributes<HTMLDivElement>
  ): JSX.Element;
}

export const AppDataGrid = React.memo(AppDataGridRaw) as DataGridComponent;
