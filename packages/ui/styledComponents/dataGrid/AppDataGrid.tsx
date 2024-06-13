import { forwardRef, memo, Ref } from "react";

import AppDataGridProps from "../props/AppDataGridProps";
import DataGridRoot from "./containers/GridRoot";
import { DataGridContextProvider } from "./context/DataGridContextProvider";
import DataGridBody from "./dataGridBody/DataGridBody";
import DataGridHead from "./dataGridHead/DataGridHead";
// import Search from "./search/Search";
import { GridValidRowModel } from "./types/gridRows";

const DataGridRaw = forwardRef(function AppDataGrid<
  R extends GridValidRowModel,
>(props: AppDataGridProps<R>, ref: Ref<HTMLTableElement>) {
  const { rows, search, searchOnChange, ...restProps } = props;

  return (
    // <div className="rounded-md border-1 p-4 shadow-md">
    //   <div className="">
    //     <Search search={search} searchOnChange={searchOnChange} />
    //     <div className="rounded-md overflow-hidden">
    <DataGridContextProvider privateApiRef={} props={props}>
      <DataGridRoot ref={ref}>
        <DataGridHead {...restProps} />
        <DataGridBody rows={rows} {...restProps} />
      </DataGridRoot>
    </DataGridContextProvider>
    //     </div>
    //   </div>
    // </div>
  );
});

interface AppDataGridComponent {
  <R extends GridValidRowModel = any>(props: AppDataGridProps<R>): JSX.Element;
}

const AppDataGrid = memo(DataGridRaw) as AppDataGridComponent;

export default AppDataGrid;
