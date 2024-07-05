import { tv } from "tailwind-variants";

export const appCheckboxVariants = tv({
  base: `text-xs bg-background border-2 border-componentBorder appearance-none 
   flex items-center justify-center transition-background-color disabled:hover:border-componentBorder
   disabled:cursor-not-allowed cursor-pointer disabled:cursor-not-allowed`,
  variants: {
    size: {
      small: "w-4 h-4",
      medium: "w-5 h-5",
      large: "w-6 h-6",
    },
    checked: {
      true: "bg-primary disabled:bg-gray-500 border-none",
      false: "bg-background",
    },
    radius: {
      none: "rounded-none",
      normal: "rounded-sm",
      large: "rounded-md",
      full: "rounded-full",
    },
  },
  defaultVariants: { size: "medium", radius: "normal", checked: false },
});
