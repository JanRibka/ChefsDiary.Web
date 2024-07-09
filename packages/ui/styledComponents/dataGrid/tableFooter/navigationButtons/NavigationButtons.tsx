import {
  MdChevronLeft,
  MdChevronRight,
  MdFirstPage,
  MdLastPage,
} from "react-icons/md";

import { Table } from "@tanstack/react-table";

import NavigationButton from "./navigationButton/NavigationButton";

interface Props<T> {
  table: Table<T>;
}

const NavigationButtons = <T extends object>(props: Props<T>) => {
  // Props
  const { table } = props;

  return (
    <div className="flex justify-center text-xs">
      <NavigationButton
        disabled={!table.getCanPreviousPage()}
        icon={<MdFirstPage />}
        onClick={table.firstPage}
      />
      <NavigationButton
        disabled={!table.getCanPreviousPage()}
        icon={<MdChevronLeft />}
        onClick={table.previousPage}
      />

      <span className="content-center">
        {table.getState().pagination.pageIndex + 1} /{" "}
        {table.getPageCount().toLocaleString()}
      </span>

      <NavigationButton
        disabled={!table.getCanNextPage()}
        icon={<MdChevronRight />}
        onClick={table.nextPage}
      />

      <NavigationButton
        disabled={!table.getCanNextPage()}
        icon={<MdLastPage />}
        onClick={table.lastPage}
      />
    </div>
  );
};

export default NavigationButtons;
