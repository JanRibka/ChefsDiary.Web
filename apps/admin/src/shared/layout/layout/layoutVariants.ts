import { tv } from "tailwind-variants";

export const layoutVariants = tv({
  base: "flex flex-col min-h-screen",
  variants: {
    opened: {
      true: "",
      false: "",
    },
  },
  defaultVariants: { opened: false },
});
