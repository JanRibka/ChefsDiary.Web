import { tv } from "tailwind-variants";

export const cellVariants = tv({
  base: "flex w-full",
  variants: {
    align: {
      left: "justify-start",
      center: "justify-center",
      right: "justify-end",
    },
  },
  defaultVariants: { align: "left" },
});
