import { cva } from 'class-variance-authority';

export const accordionItemIconVariants = cva(
  "transition-transform duration-500",
  {
    variants: {
      opened: {
        true: "rotate-90",
        false: "rotate-0",
      },
    },
    defaultVariants: { opened: false },
  }
);
