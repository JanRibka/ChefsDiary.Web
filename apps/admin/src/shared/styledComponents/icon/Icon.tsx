import { forwardRef } from "react";

interface Props {
  icon: JSX.Element;
  disableScaleOnHover?: boolean;
}

const Icon = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { icon, ...restProps } = props;

  return (
    <div
      {...restProps}
      ref={ref}
      className={`cursor-pointer text-primary transition 300ms ease-in-out hover:text-primary-dark ${props.disableScaleOnHover ? "" : "hover:scale-125"}`}
    >
      {icon}
    </div>
  );
});

export default Icon;
