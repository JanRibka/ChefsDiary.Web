import { tv } from "tailwind-variants";

export const hamburgerIconLine2Variants = tv({
  base: "w-[28px]",
  variants: {
    opened: {
      true: "translate-x-[50px] opacity-0",
      false: "translate-x-0 opacity-100",
    },
  },
  defaultVariants: { opened: false },
});
