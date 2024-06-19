import { Header, Table } from "@tanstack/react-table";

interface ResizerProps<T> {
  header: Header<T, unknown>;
  table: Table<T>;
}

const Resizer = <T extends object>(props: ResizerProps<T>) => {
  const { header, table } = props;

  if (!header.column.getCanResize()) {
    return null;
  }

  const getTranslateValue = () => {
    header.column.getIsResizing()
      ? (table.options.columnResizeDirection === "ltr" ? -1 : 1) *
        (table.getState().columnSizingInfo.deltaOffset ?? 0)
      : 0;
  };

  return (
    <div
      onDoubleClick={() => header.column.resetSize()}
      onMouseDown={header.getResizeHandler()}
      onTouchStart={header.getResizeHandler()}
      className={`w-0.5 h-full translate-x-[${getTranslateValue()}px] bg-error hover:cursor-col-resize`}
    />
  );
};

export default Resizer;
