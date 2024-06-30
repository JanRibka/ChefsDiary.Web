import { HTMLAttributes } from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

import { mergeStyles } from "@repo/shared/helpers";
import { Header } from "@tanstack/react-table";

import AppButtonIcon from "../../../buttonIcon/AppButtonIcon";
import AppDropDownMenu from "../../../dropdownMenu/AppDropDownMenu";
import FilterContent from "./FilterContent";

interface FilterProps<T> extends HTMLAttributes<HTMLDivElement> {
  header: Header<T, unknown>;
}

const Filter = <T extends object>(props: FilterProps<T>) => {
  // Props
  const { header, className, ...restProps } = props;

  return (
    <AppDropDownMenu content={<FilterContent header={header} />}>
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
    </AppDropDownMenu>
  );
};

export default Filter;
