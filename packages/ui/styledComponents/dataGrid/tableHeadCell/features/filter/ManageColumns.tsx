import { Header } from "@tanstack/react-table";

import AppCheckbox from "../../../../checkbox/AppCheckbox";

interface ManageColumnsProps<T> {
  header: Header<T, unknown>;
}

const ManageColumns = <T extends object>(props: ManageColumnsProps<T>) => {
  // Props
  const { header } = props;
  debugger;
  // Constants
  const columns = header.getContext().table.getAllLeafColumns();
  const visibleColumns = columns.filter((column) => column.getIsVisible());

  return (
    <div>
      <div>
        {columns.map((column, index) => {
          const checked = column.getIsVisible();

          return (
            <AppCheckbox
              key={`column-visibility-checkbox_${index}`}
              name={column.id}
              label={column.columnDef.header?.toString() ?? ""}
              checked={checked}
              disabled={
                column.getCanHide() === false ||
                (visibleColumns.length <= 1 && checked)
              }
              onChange={(e) => {
                e.preventDefault();
                e.stopPropagation();
                column.getToggleVisibilityHandler()(e);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ManageColumns;
