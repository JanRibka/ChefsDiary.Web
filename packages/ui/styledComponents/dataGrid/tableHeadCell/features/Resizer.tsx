import { RxDividerVertical } from "react-icons/rx";

import { mergeStyles } from "@repo/shared/helpers";
import { Header, Table } from "@tanstack/react-table";

import { resizerVariants } from "./resizerVariants";

interface ResizerProps<T> {
  header: Header<T, unknown>;
  table: Table<T>;
}

const Resizer = <T extends object>(props: ResizerProps<T>) => {
  const { header, table } = props;

  const direction = table.options.columnResizeDirection;

  if (!header.column.getCanResize()) {
    return null;
  }

  const getTranslateValue = () => {
    return table.options.columnResizeMode === "onEnd" &&
      header.column.getIsResizing()
      ? (direction === "ltr" ? -1 : 1) *
          (table.getState().columnSizingInfo.deltaOffset ?? 0)
      : 0;
  };

  return (
    <div
      onDoubleClick={() => header.column.resetSize()}
      onMouseDown={header.getResizeHandler()}
      onTouchStart={header.getResizeHandler()}
      className={mergeStyles(
        `translate-x-[${getTranslateValue()}px]`,
        resizerVariants({ direction: direction })
      )}
    >
      <RxDividerVertical className="h-full max-h-5" />
    </div>
  );
};

export default Resizer;
