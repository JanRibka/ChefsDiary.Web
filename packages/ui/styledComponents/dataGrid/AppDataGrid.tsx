import { useReactTable } from "@tanstack/react-table";

import AppDataGridProps from "./AppDataGridProps";

const AppDataGrid = <T extends object>(props: AppDataGridProps<T>) => {
  const table = useReactTable<T>({ ...props });

  return <table className=""></table>;
};

export default AppDataGrid;
