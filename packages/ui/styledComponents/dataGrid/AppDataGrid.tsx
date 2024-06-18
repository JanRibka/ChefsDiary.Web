import { useReactTable } from "@tanstack/react-table";

import AppDataGridProps from "./AppDataGridProps";
import AppTable from "./table/AppTable";

const AppDataGrid = <T extends object>(props: AppDataGridProps<T>) => {
  const table = useReactTable<T>({ ...props });

  return <AppTable table={table} />;
};

export default AppDataGrid;
