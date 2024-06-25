import { tv } from "tailwind-variants";

export const resizerVariants = tv({
  base: "absolute top-0 w-4 h-full z-10 flex items-center justify-center visibility:hidden hover:cursor-col-resize opacity-0 transition-opacity duration-200 ease-in-out",
  variants: {
    direction: {
      ltr: "-right-2",
      rtl: "-left-2",
    },
  },
  defaultVariants: { direction: "ltr" },
});
