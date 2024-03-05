import { cva } from "class-variance-authority";

const noErrorStyle: string = "text-gray-700 peer-focus:text-primary";

export const inputLabelBaseVariants = cva(
  "absolute text-sm duration-300 transform scale-75 origin-[0] z-10 peer-placeholder-shown:scale-100 peer-focus:scale-75",
  {
    variants: {
      error: {
        true: "text-error",
        false: noErrorStyle,
        undefined: noErrorStyle,
      },
      variant: {
        filled: "start-2.5 peer-placeholder-shown:translate-y-0",
        standard:
          "-translate-y-6 top-3 peer-focus:start-0 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6",
        outlined:
          "bg-white px-2 start-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:px-2",
      },
      size: { small: "", normal: "" },
    },
    compoundVariants: [
      {
        size: "small",
        variant: "filled",
        class: "-translate-y-3 top-3 peer-focus:-translate-y-3",
      },
      { size: "small", variant: "standard", class: "" },
      {
        size: "small",
        variant: "outlined",
        class:
          "-translate-y-3 top-0.5 peer-focus:top-0.5 peer-focus:-translate-y-3",
      },
      {
        size: "normal",
        variant: "filled",
        class: "-translate-y-4 top-4 peer-focus:-translate-y-4",
      },
      { size: "normal", variant: "standard", class: "" },
      {
        size: "normal",
        variant: "outlined",
        class:
          "-translate-y-4 top-1.5 peer-focus:top-1.5 peer-focus:-translate-y-4",
      },
    ],
    defaultVariants: { variant: "outlined", size: "normal" },
  }
);
