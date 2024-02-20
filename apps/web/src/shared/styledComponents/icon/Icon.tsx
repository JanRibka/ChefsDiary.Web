import { forwardRef } from "react";

interface IProps {
  icon: JSX.Element;
}

const Icon = forwardRef<HTMLDivElement, IProps>((props, ref) => {
  const { icon, ...restProps } = props;

  return (
    <div
      {...restProps}
      ref={ref}
      className="cursor-pointer text-primary transition 300ms ease-in-out hover:text-primary-dark hover:scale-125"
    >
      {icon}
    </div>
  );
});

export default Icon;
