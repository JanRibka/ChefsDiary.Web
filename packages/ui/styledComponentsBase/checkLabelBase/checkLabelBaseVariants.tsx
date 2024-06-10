import { tv } from "tailwind-variants";

const disabledStyle: string = "text-componentText";

export const checkboxLabelBaseVariants = tv({
  base: "text-sm cursor-pointer ml-2",
  variants: {
    disable: {
      true: "text-componentText-light cursor-not-allowed",
      false: disabledStyle,
      undefined: disabledStyle,
    },
  },
});
