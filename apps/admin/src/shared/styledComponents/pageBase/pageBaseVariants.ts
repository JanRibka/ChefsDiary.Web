import { cva } from "class-variance-authority";

export const pageBaseVariants = cva(
  "bg-dialogBackground h-full ml-0 md:ml-24 flex-1",
  {
    variants: {
      sideBarOpened: {
        true: "xl:ml-64",
        false: "xl:ml-24",
      },
    },
    defaultVariants: { sideBarOpened: false },
  }
);
