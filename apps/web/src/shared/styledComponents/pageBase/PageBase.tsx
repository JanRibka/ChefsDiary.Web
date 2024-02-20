interface IProps {
  children: JSX.Element;
}

const PageBase = (props: IProps) => {
  return <main>{props.children}</main>;
};

export default PageBase;
