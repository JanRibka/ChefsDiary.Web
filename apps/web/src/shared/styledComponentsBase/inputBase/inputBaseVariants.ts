import { cva } from "class-variance-authority";

const noErrorStyle: string =
  "border-componentBorder hover:border-componentBorder-dark disabled:hover:border-componentBorder focus:border-primary ring-primary";

export const inputBaseVariants = cva(
  "block w-full text-sm text-ComponentText appearance-none peer disabled:text-componentText-light focus:outline-none",
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
        outlined: "px-2.5 bg-transparent border-1 focus:ring-1",
      },
      size: { small: "", normal: "" },
      radius: { none: "", normal: "", large: "", full: "" },
    },
    compoundVariants: [
      { size: "small", variant: "filled", class: "pb-1.5 pt-4" },
      { size: "small", variant: "standard", class: "pb-1 pt-3" },
      { size: "small", variant: "outlined", class: "pb-2 pt-2.5" },
      { size: "normal", variant: "filled", class: "pb-2.5 pt-5" },
      { size: "normal", variant: "standard", class: "pb-1 pt-4" },
      { size: "normal", variant: "outlined", class: "pb-3 pt-3.5" },
      { variant: "outlined", radius: "none", class: "rounded-none" },
      { variant: "outlined", radius: "normal", class: "rounded-sm" },
      { variant: "outlined", radius: "large", class: "rounded-lg" },
      { variant: "outlined", radius: "full", class: "rounded-full" },
    ],
    defaultVariants: { variant: "outlined", size: "normal", radius: "normal" },
  }
);
