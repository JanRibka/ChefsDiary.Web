import { cva } from "class-variance-authority";

export const rippleVariants = cva(
  "bg-white w-[1px] h-[1px] rounded-full opacity-40 absolute ",
  { variants: { start: { true: "", false: "" } } }
);
