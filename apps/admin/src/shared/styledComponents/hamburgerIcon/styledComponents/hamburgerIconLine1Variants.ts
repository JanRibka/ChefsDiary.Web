import { tv } from "tailwind-variants";

export const hamburgerIconLine1Variants = tv({
  base: "w-[30px]",
  variants: {
    opened: {
      true: "rotate-[45deg] translate-y-[7px]",
      false: "rotate-0 translate-y-0",
    },
  },
  defaultVariants: { opened: false },
});
