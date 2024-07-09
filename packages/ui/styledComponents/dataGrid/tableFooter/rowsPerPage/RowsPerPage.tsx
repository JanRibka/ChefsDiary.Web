import { Table } from "@tanstack/react-table";

export interface RowsPerPageProps<T> {
  table: Table<T>;
  pageSizeList?: number[];
}

const RowsPerPage = <T extends object>(props: RowsPerPageProps<T>) => {
  // Props
  const { table, pageSizeList } = props;

  // Constants
  const pageSize = table.getState().pagination.pageSize;

  // Handlers
  const handleOnCHangePageSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value);

    table.setPageSize(value);
  };

  return (
    <div className="flex items-center gap-2 text-xs">
      <span>Řádků na stránce:</span>
      <select
        value={pageSize}
        onChange={handleOnCHangePageSize}
        className="min-w-12 p-0.5"
      >
        {pageSizeList?.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RowsPerPage;
