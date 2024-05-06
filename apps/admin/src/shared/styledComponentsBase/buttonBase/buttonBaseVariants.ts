import { cva } from "class-variance-authority";

const buttonBaseVariants = cva(
  "appearance-none px-4 transition-background-color font-bold relative",
  {
    variants: {
      size: {
        small: "py-1",
        medium: "py-1.5",
        large: "py-2",
      },
      variant: {
        text: "text-primary hover:bg-primary hover:bg-opacity-5 bg-background",
        contained: "text-white bg-primary hover:bg-primary-dark",
        outlined:
          "text-primary border-1 border-primary bg-background hover:bg-primary hover:bg-opacity-5 hover:border-primary-dark",
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
  }
);

export default buttonBaseVariants;
