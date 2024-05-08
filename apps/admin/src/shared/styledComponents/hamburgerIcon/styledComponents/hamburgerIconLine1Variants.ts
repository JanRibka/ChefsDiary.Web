import { cva } from "class-variance-authority";

export const hamburgerIconLine1Variants = cva("w-[30px]", {
  variants: {
    opened: {
      true: "rotate-[45deg] translate-y-[7px]",
      false: "rotate-0 translate-y-0",
    },
  },
  defaultVariants: { opened: false },
});
