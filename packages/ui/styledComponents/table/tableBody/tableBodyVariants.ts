import { cva } from "class-variance-authority";

export const tableBodyVariants = cva(
  "hover:bg-gray-100 border-b-1 last:border-b-0",
  {
    variants: {
      isEven: {
        true: "bg-gray-100",
        false: "",
      },
    },
    defaultVariants: { isEven: false },
  }
);
