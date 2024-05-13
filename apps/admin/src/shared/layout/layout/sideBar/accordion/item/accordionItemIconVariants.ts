import { cva } from 'class-variance-authority';

export const accordionItemIconVariants = cva(
  "transition-transform duration-500 md:hidden xl:block",
  {
    variants: {
      opened: {
        true: "rotate-90",
        false: "rotate-0",
      },
      sideBarOpened: {
        true: "",
        false: "",
      },
    },
    defaultVariants: { opened: false, sideBarOpened: false },
  }
);
