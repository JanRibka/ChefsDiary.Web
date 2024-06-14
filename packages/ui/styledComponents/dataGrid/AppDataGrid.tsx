import { forwardRef, memo, Ref, RefAttributes } from "react";

import { GridRoot } from "./components/containers/GridRoot";
import { DataGridContextProvider } from "./context/GridContextProvider";
import DataGridBody from "./dataGridBody/DataGridBody";
import DataGridHead from "./dataGridHead/DataGridHead";
import { GridValidRowModel } from "./models/gridRows";
import { DataGridProps } from "./models/props/gridProps";
import { useDataGridComponent } from "./useDataGridComponent";
import { useDataGridProps } from "./useDataGridProps";

// import Search from "./search/Search";

const DataGridRaw = forwardRef(function AppDataGrid<
  R extends GridValidRowModel,
>(inProps: DataGridProps<R>, ref: Ref<HTMLDivElement>) {
  const props = useDataGridProps(inProps);
  const apiRef = useDataGridComponent(props.apiRef, props);

  return (
    // <div className="rounded-md border-1 p-4 shadow-md">
    //   <div className="">
    //     <Search search={search} searchOnChange={searchOnChange} />
    //     <div className="rounded-md overflow-hidden">
    <DataGridContextProvider apiRef={apiRef} props={props}>
      <GridRoot ref={ref} className={props.className}>
        <DataGridHead {...restProps} />
        <DataGridBody rows={rows} {...restProps} />
      </GridRoot>
    </DataGridContextProvider>
    //     </div>
    //   </div>
    // </div>
  );
});

interface DataGridComponent {
  <R extends GridValidRowModel = any>(
    props: DataGridProps<R> & RefAttributes<HTMLDivElement>
  ): JSX.Element;
}

const AppDataGrid = memo(DataGridRaw) as DataGridComponent;

export default AppDataGrid;
