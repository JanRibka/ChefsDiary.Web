import { mergeStyles } from "@repo/shared/helpers";

interface Props {
  className?: string;
}

const HamburgerIcon = (props: Props) => {
  return (
    <div
      className={mergeStyles(
        "p-0 h-[2px] mx-0 my-[5px] bg-primary transition-all duration-700 cubic-bezier(0.9, 0, 0.33, 1)",
        props.className ?? ""
      )}
    />
  );
};

export default HamburgerIcon;
