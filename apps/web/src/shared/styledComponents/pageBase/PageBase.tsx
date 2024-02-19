interface IProps {
  children: JSX.Element;
}

const PageBase = (props: IProps) => {
  return <main className="bg-page-primary">{props.children}</main>;
};

export default PageBase;
