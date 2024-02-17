interface IProps {
  title: string;
  href: string;
  icon: JSX.Element;
}

const ListItem = (props: IProps) => {
  return (
    <li className="mr-3 last-of-type:mr-0">
      <a
        title={props.title}
        href={props.href}
        target="_blank"
        aria-label={props.title}
      >
        {props.icon}
      </a>
    </li>
  );
};

export default ListItem;
