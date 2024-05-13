import { cva } from 'class-variance-authority';

export const accordionItemLabelVariants = cva("ml-3 md:hidden", {
  variants: {
    sideBarOpened: {
      true: "xl:block",
      false: "xl:hidden",
    },
  },
  defaultVariants: { sideBarOpened: false },
});
