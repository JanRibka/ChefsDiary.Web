import { cva } from "class-variance-authority";

export const accordionItemContentVariants = cva(
  "overflow-hidden transition-all duration-500 ease-in-out pl-6 md:hidden xl:block",
  {
    variants: {
      opened: {
        true: "max-h-40 py-2",
        false: "max-h-0 py-0",
      },
    },
    defaultVariants: { opened: false },
  }
);
