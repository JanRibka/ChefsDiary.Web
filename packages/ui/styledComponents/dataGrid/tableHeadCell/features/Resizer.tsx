import { RxDividerVertical } from "react-icons/rx";

import { mergeStyles } from "@repo/shared/helpers";
import { Header, Table } from "@tanstack/react-table";

import { resizerVariants } from "./resizerVariants";

interface ResizerProps<T> {
  header: Header<T, unknown>;
  table: Table<T>;
}

const Resizer = <T extends object>(props: ResizerProps<T>) => {
  const { header, table, ...restProps } = props;

  const direction = table.options.columnResizeDirection;
  const canResize = header.column.getCanResize();

  if (!canResize) {
    return null;
  }

  return (
    <div
      onDoubleClick={() => header.column.resetSize()}
      onMouseDown={header.getResizeHandler()}
      onTouchStart={header.getResizeHandler()}
      className={mergeStyles(
        "resizer",
        canResize ? "can-resize" : undefined,
        resizerVariants({ direction: direction })
      )}
      {...restProps}
    >
      <RxDividerVertical className="h-full max-h-5" />
    </div>
  );
};

export default Resizer;
