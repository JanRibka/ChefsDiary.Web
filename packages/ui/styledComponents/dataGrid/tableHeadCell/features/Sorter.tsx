import { HTMLAttributes, ReactNode } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

import { Header } from "@tanstack/react-table";

import { AppButtonIcon } from "../../..";
import SortingType from "../../types/SortingType";

interface SorterProps<T> extends HTMLAttributes<HTMLSpanElement> {
  header: Header<T, unknown>;
  children: ReactNode;
}

const Sorter = <T extends object>(props: SorterProps<T>) => {
  // Props
  const { children, header, ...restProps } = props;

  // Constants
  const canSort = header.column.getCanSort();

  if (canSort) {
    const title =
      header.column.getNextSortingOrder() === "asc"
        ? "Vzestupně"
        : header.column.getNextSortingOrder() === "desc"
          ? "Sestupně"
          : "Smazat řazení";

    return (
      <span
        className="cursor-pointer select-none flex items-center"
        onClick={header.column.getToggleSortingHandler()}
        title={title}
        {...restProps}
      >
        <>
          {children}
          {{
            asc: (
              <AppButtonIcon className="text-sm">
                <FaArrowUp />
              </AppButtonIcon>
            ),
            desc: (
              <AppButtonIcon className="text-sm">
                <FaArrowDown />
              </AppButtonIcon>
            ),
          }[header.column.getIsSorted() as keyof SortingType] ?? null}
        </>
      </span>
    );
  }

  return <span {...restProps}>{children}</span>;
};

export default Sorter;
