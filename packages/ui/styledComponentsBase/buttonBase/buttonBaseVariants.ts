import { tv } from "tailwind-variants";

const buttonBaseVariants = tv({
  base: "appearance-none transition-background-color font-bold",
  variants: {
    size: {
      small: "py-1",
      medium: "py-1.5",
      large: "py-2",
    },
    variant: {
      text: "px-4 text-primary bg-background hover:bg-primary hover:bg-opacity-5",
      contained: "px-4 text-white bg-primary hover:bg-primary-dark",
      outlined:
        "px-4 text-primary border-1 border-primary bg-background hover:bg-primary hover:bg-opacity-5 hover:border-primary-dark",
      icon: "px-2 text-2xl text-primary aspect-square bg-transparent hover:bg-gray-500",
    },
    radius: {
      none: "rounded-none",
      normal: "rounded-sm",
      large: "rounded-md",
      full: "rounded-full",
    },
    disabled: {
      true: "cursor-not-allowed text-componentText-light",
      false: "",
    },
  },
  compoundVariants: [
    { disabled: true, variant: "text", class: "hover:bg-background" },
    {
      disabled: true,
      variant: "contained",
      class: "bg-gray-500 hover:bg-gray-500",
    },
    {
      disabled: true,
      variant: "outlined",
      class:
        "bg-background border-gray-500 hover:bg-background hover:border-gray-500",
    },
  ],
  defaultVariants: {
    size: "medium",
    variant: "outlined",
    radius: "normal",
    disabled: false,
  },
});

export default buttonBaseVariants;
