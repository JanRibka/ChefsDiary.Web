import { BiSolidHide } from "react-icons/bi";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { TfiLayoutColumn3Alt } from "react-icons/tfi";
import { TiDeleteOutline } from "react-icons/ti";

import { Header } from "@tanstack/react-table";

import AppDropDownMenuItem from "../../../dropdownMenu/components/DropDownMenuItem";
import AppDropDownMenuSeparator from "../../../dropdownMenu/components/DropDownMenuSeparator";
import AppPopover from "../../../popover/AppPopover";
import SortingType from "../../types/SortingType";
import FilterContentItem from "./FilterContentItem";

interface FilterContentProps<T> {
  header: Header<T, unknown>;
}

const FilterContent = <T extends object>(props: FilterContentProps<T>) => {
  // Props
  const { header } = props;

  // Constants
  const sortingEnabled = header.column.getCanSort();

  const showHideSortingItem = (itemName: SortingType) => {
    const sortDirection = header.column.getIsSorted();

    switch (itemName) {
      case "asc":
        return sortDirection !== "asc";

      case "desc":
        return sortDirection !== "desc";

      case false:
        return sortDirection !== false;
    }
  };

  return (
    <>
      {sortingEnabled && (
        <>
          {showHideSortingItem("asc") && (
            <AppDropDownMenuItem>
              <FilterContentItem icon={<FaArrowUp />} label="Řadit vzestupně" />
            </AppDropDownMenuItem>
          )}
          {showHideSortingItem("desc") && (
            <AppDropDownMenuItem>
              <FilterContentItem
                icon={<FaArrowDown />}
                label="Řadit sestupně"
              />
            </AppDropDownMenuItem>
          )}
          {showHideSortingItem(false) && (
            <AppDropDownMenuItem>
              <FilterContentItem
                icon={<TiDeleteOutline />}
                label="Zrušit řazení"
              />
            </AppDropDownMenuItem>
          )}

          <AppDropDownMenuSeparator />

          <AppDropDownMenuItem
            onClick={header.column.getToggleVisibilityHandler()}
          >
            <FilterContentItem icon={<BiSolidHide />} label="Skrýt sloupec" />
          </AppDropDownMenuItem>
          <AppPopover content={<div>Content</div>}>
            <AppDropDownMenuItem
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <FilterContentItem
                icon={<TfiLayoutColumn3Alt />}
                label="Spravovat sloupce"
              />
            </AppDropDownMenuItem>
          </AppPopover>
        </>
      )}
    </>
  );
};

export default FilterContent;
