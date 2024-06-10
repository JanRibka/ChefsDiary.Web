import { tv } from "tailwind-variants";

export const appDescribedByAreaVariants = tv({
  base: "mt-1 bg-dialogBackground rounded-sm px-2.5 py-1.5 shadow-sm transition-all duration-100 overflow-hidden",
  variants: {
    display: {
      true: "h-full",
      false: "h-0 opacity-0 p-0 mt-0",
    },
  },
  defaultVariants: { display: false },
});
