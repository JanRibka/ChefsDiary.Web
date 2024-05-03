interface Props {
  children: JSX.Element;
}

const PageBase = (props: Props) => {
  return <main>{props.children}</main>;
};

export default PageBase;
