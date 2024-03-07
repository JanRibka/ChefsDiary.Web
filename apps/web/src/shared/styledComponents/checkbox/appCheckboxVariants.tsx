import { cva } from "class-variance-authority";

const notCheckedStyle: string = "bg-background";

export const appCheckboxVariants = cva(
  "text-xs bg-background border-2 border-componentBorder appearance-none flex items-center justify-center transition-background-color hover:border-componentBorder-dark disabled:hover:border-componentBorder disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        small: "w-4 h-4",
        normal: "w-5 h-5",
        large: "w-6 h-6",
      },
      checked: {
        true: "bg-primary text-white disabled:bg-gray-500",
        false: notCheckedStyle,
        undefined: notCheckedStyle,
        null: notCheckedStyle,
      },
      radius: {
        none: "rounded-none",
        normal: "rounded-sm",
        large: "rounded-md",
        full: "rounded-full",
      },
    },
    defaultVariants: { size: "normal", radius: "normal" },
  }
);
