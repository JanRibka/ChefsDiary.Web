import { forwardRef, memo, Ref } from "react";

import AppDataGridProps from "../props/AppDataGridProps";
import TableBody from "./dataGridBody/DataGridBody";
import TableHead from "./dataGridHead/DataGridHead";
import Search from "./search/Search";
import { GridValidRowModel } from "./types/gridRows";

const DataGridRaw = forwardRef(function AppDataGrid<
  R extends GridValidRowModel,
>(props: AppDataGridProps<R>, ref: Ref<HTMLDivElement>) {
  return (
    <div className="rounded-md border-1 p-4 shadow-md">
      <div className="">
        <Search search={props.search} />
        <div className="rounded-md overflow-hidden">
          <table className="w-full text-sm text-left">
            <TableHead
              columns={props.columns}
              name={props.name}
              getRowId={props.getRowId}
            />
            <TableBody
              rows={props.rows}
              columns={props.columns}
              name={props.name}
              getRowId={props.getRowId}
            />
          </table>
        </div>
      </div>
    </div>
  );
});

interface AppDataGridComponent {
  <R extends GridValidRowModel = any>(props: AppDataGridProps<R>): JSX.Element;
}

const AppDataGrid = memo(DataGridRaw) as AppDataGridComponent;

export default AppDataGrid;
