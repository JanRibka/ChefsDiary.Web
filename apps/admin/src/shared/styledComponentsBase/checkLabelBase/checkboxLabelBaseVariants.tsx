import { cva } from "class-variance-authority";

const disabledStyle: string = "text-componentText";

export const checkboxLabelBaseVariants = cva("text-sm cursor-pointer ml-2", {
  variants: {
    disable: {
      true: "text-componentText-light cursor-not-allowed",
      false: disabledStyle,
      undefined: disabledStyle,
    },
  },
});
