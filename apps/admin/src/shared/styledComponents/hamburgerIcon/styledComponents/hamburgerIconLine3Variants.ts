import { tv } from "tailwind-variants";

export const hamburgerIconLine3Variants = tv({
  base: "w-[20px]",
  variants: {
    opened: {
      true: "w-[30px] rotate-[-45deg] translate-y-[-7px]",
      false: "rotate-0 translate-y-0",
    },
  },
  defaultVariants: { opened: false },
});
