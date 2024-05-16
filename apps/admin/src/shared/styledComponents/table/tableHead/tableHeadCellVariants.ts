import { cva } from "class-variance-authority";

export const tableHeadCellVariants = cva("px-6 py-3", {
  variants: {
    width: (width?: number) => {
      return width ? `w-${width}` : "";
    },
  },
});
