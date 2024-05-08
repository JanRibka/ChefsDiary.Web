import { cva } from "class-variance-authority";

export const hamburgerIconLine3Variants = cva("w-[20px]", {
  variants: {
    opened: {
      true: "w-[30px] rotate-[-45deg] translate-y-[-7px]",
      false: "rotate-0 translate-y-0",
    },
  },
  defaultVariants: { opened: false },
});
