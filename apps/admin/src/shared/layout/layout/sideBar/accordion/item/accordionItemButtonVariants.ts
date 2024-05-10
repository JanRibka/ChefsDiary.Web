import { cva } from 'class-variance-authority';

export const accordionItemButtonVariants = cva(
  "flex flex-row items-center w-full font-bold text-lg px-2 py-3 rounded-lg transition-all duration-500",
  {
    variants: {
      opened: {
        true: "text-primary bg-primary/15 shadow-lg shadow-primary/15",
        false: "",
      },
    },
    defaultVariants: { opened: false },
  }
);
