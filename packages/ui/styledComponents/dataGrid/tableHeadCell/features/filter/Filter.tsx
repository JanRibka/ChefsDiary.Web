import { HTMLAttributes, useState } from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

import { mergeStyles } from "@repo/shared/helpers";
import { Header } from "@tanstack/react-table";

import AppButtonIcon from "../../../../buttonIcon/AppButtonIcon";
import AppDropDownMenu from "../../../../dropdownMenu/AppDropDownMenu";
import AppPopover from "../../../../popover/AppPopover";
import FilterContent from "./FilterContent";
import ManageColumns from "./ManageColumns";

interface FilterProps<T> extends HTMLAttributes<HTMLDivElement> {
  header: Header<T, unknown>;
}

const Filter = <T extends object>(props: FilterProps<T>) => {
  // Props
  const { header, className, ...restProps } = props;

  // State
  const [openManageColumns, setOpenManageColumns] = useState(false);

  // Handlers
  const handleToggleManageColumns = () => {
    setOpenManageColumns((prev) => !prev);
  };

  return (
    <>
      <AppDropDownMenu
        content={
          <FilterContent
            header={header}
            handleOpenManageColumns={handleToggleManageColumns}
          />
        }
      >
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

      <AppPopover
        open={openManageColumns}
        setClose={handleToggleManageColumns}
        content={<ManageColumns header={header} />}
      />
    </>
  );
};

export default Filter;
