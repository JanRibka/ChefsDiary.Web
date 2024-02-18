interface IProps {
  icon: JSX.Element;
}

const Icon = (props: IProps) => {
  return (
    <div className="cursor-pointer text-primary transition 300ms ease-in-out hover:text-primary-dark hover:scale-125">
      {props.icon}
    </div>
  );
};

export default Icon;
