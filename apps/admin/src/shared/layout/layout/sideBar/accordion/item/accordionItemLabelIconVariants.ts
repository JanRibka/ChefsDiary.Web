import { cva } from "class-variance-authority";

export const accordionItemLabelIconVariants = cva("text-xl md:text-3xl", {
  variants: {
    sideBarOpened: {
      true: "xl:text-2xl",
      false: "xl:text-3xl",
    },
  },
  defaultVariants: { sideBarOpened: false },
});
