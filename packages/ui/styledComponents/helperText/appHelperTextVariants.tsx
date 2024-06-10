import { tv } from "tailwind-variants";

const noErrorStyle: string[] = ["text-gray-700"];

export const appHelperTextVariants = tv({
  base: "text-xs mt-1",
  variants: {
    error: {
      true: "text-error",
      false: noErrorStyle,
      undefined: noErrorStyle,
    },
  },
});
