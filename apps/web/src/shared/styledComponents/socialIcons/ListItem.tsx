import { AppIcon } from "@repo/ui/styledComponents";

interface Props {
  title: string;
  href: string;
  icon: JSX.Element;
}

const ListItem = (props: Props) => {
  return (
    <li className="mr-3 last-of-type:mr-0">
      <a
        title={props.title}
        href={props.href}
        target="_blank"
        aria-label={props.title}
      >
        <AppIcon icon={props.icon} />
      </a>
    </li>
  );
};

export default ListItem;
