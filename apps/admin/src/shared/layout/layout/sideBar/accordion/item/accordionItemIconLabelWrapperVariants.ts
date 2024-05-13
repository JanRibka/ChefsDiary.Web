import { cva } from "class-variance-authority";

export const accordionItemIconLabelWrapperVariants = cva(
  "flex w-full items-center justify-start md:justify-center",
  {
    variants: {
      sideBarOpened: {
        true: "xl:justify-start",
        false: "",
      },
    },

    defaultVariants: { sideBarOpened: false },
  }
);
