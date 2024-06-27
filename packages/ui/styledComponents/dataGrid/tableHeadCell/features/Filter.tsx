import { HTMLAttributes } from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

import { mergeStyles } from "@repo/shared/helpers";
import { Header } from "@tanstack/react-table";

import { AppButtonIcon } from "../../..";

interface FilterProps<T> extends HTMLAttributes<HTMLDivElement> {
  header: Header<T, unknown>;
}

const Filter = <T extends object>(props: FilterProps<T>) => {
  // Props
  const { header, className, ...restProps } = props;
  return (
    <div
      className={mergeStyles(
        "cell-filter",
        "absolute right-0 opacity-0",
        className
      )}
      {...restProps}
    >
      <AppButtonIcon className="text-sm">
        <PiDotsThreeOutlineVerticalFill />
      </AppButtonIcon>
    </div>
  );
};

export default Filter;
