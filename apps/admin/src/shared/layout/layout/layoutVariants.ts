import { cva } from "class-variance-authority";

export const layoutVariants = cva("flex flex-col min-h-screen", {
  variants: {
    opened: {
      true: "",
      false: "",
    },
  },
  defaultVariants: { opened: false },
});
