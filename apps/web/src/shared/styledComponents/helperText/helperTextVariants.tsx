import { cva } from "class-variance-authority";

const noErrorStyle: string[] = ["text-gray-700"];

export const helperTextVariants = cva("text-xs mt-1", {
  variants: {
    error: {
      true: "text-error",
      false: noErrorStyle,
      undefined: noErrorStyle,
    },
  },
});
