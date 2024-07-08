import {
  MdChevronLeft,
  MdChevronRight,
  MdFirstPage,
  MdLastPage,
} from "react-icons/md";

import { Table } from "@tanstack/react-table";

import AppButtonIcon from "../../../buttonIcon/AppButtonIcon";

interface Props<T> {
  table: Table<T>;
}

const NavigationButtons = <T extends object>(props: Props<T>) => {
  // Props
  const { table } = props;

  return (
    <div>
      <AppButtonIcon
        disabled={!table.getCanPreviousPage()}
        onClick={table.firstPage}
      >
        <MdFirstPage />
      </AppButtonIcon>
      <AppButtonIcon
        disabled={!table.getCanPreviousPage()}
        onClick={table.previousPage}
      >
        <MdChevronLeft />
      </AppButtonIcon>

      <span>
        {table.getState().pagination.pageIndex + 1} /{" "}
        {table.getPageCount().toLocaleString()}
      </span>

      <AppButtonIcon
        disabled={!table.getCanNextPage()}
        onClick={table.nextPage}
      >
        <MdChevronRight />
      </AppButtonIcon>
      <AppButtonIcon
        disabled={!table.getCanNextPage()}
        onClick={table.lastPage}
      >
        <MdLastPage />
      </AppButtonIcon>
    </div>
  );
};

export default NavigationButtons;
