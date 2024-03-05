import { cva } from "class-variance-authority";

const noErrorStyle: string =
  "border-gray-500 hover:border-black disabled:hover:border-gray-500 focus:border-primary ring-primary";

export const inputBaseVariants = cva(
  "block w-full text-sm text-gray-950 appearance-none peer disabled:text-gray-700 focus:outline-none",
  {
    variants: {
      error: {
        true: "border-error ring-error",
        false: noErrorStyle,
        undefined: noErrorStyle,
      },
      variant: {
        filled:
          "px-2.5 bg-gray-50 border-0 border-b-2 rounded-t-sm hover:bg-gray-100 disabled:bg-gray-200 focus:ring-0",
        standard: "px-0 bg-transparent border-0 border-b-2 focus:ring-0",
        outlined: "px-2.5 bg-transparent rounded-sm border-1 focus:ring-1",
      },
      size: { small: "", normal: "" },
    },
    compoundVariants: [
      { size: "small", variant: "filled", class: "pb-1.5 pt-4" },
      { size: "small", variant: "standard", class: "pb-1 pt-3" },
      { size: "small", variant: "outlined", class: "pb-2 pt-2.5" },
      { size: "normal", variant: "filled", class: "pb-2.5 pt-5" },
      { size: "normal", variant: "standard", class: "pb-1 pt-4" },
      { size: "normal", variant: "outlined", class: "pb-3 pt-3.5" },
    ],
    defaultVariants: { variant: "outlined", size: "normal" },
  }
);
