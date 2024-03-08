import { cva } from "class-variance-authority";

const buttonBaseVariants = cva("appearance-none", {
  variants: {
    size: {
      small: "",
      medium: "",
      large: "",
    },
    variant: { outlined: "", filled: "", standard: "" },
  },
  defaultVariants: { size: "medium", variant: "outlined" },
});

export default buttonBaseVariants;
