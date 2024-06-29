import { Header } from "@tanstack/react-table";

import AppDropDownMenuItem from "../../../dropdownMenu/components/DropDownMenuItem";
import AppDropDownMenuSeparator from "../../../dropdownMenu/components/DropDownMenuSeparator";
import SortingType from "../../types/SortingType";

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
            <AppDropDownMenuItem>Řadit vzestupně</AppDropDownMenuItem>
          )}
          {showHideSortingItem("desc") && (
            <AppDropDownMenuItem>Řadit sestupně</AppDropDownMenuItem>
          )}
          {showHideSortingItem(false) && (
            <AppDropDownMenuItem>Zrušit řazení</AppDropDownMenuItem>
          )}

          <AppDropDownMenuSeparator />

          <AppDropDownMenuItem
            onClick={header.column.getToggleVisibilityHandler()}
          >
            Skrýt sloupec
          </AppDropDownMenuItem>
          <AppDropDownMenuItem>Spravovat sloupce</AppDropDownMenuItem>
        </>
      )}
    </>
  );
};

export default FilterContent;
