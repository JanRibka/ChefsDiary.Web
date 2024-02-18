import { Link } from "react-router-dom";

import { RouteValue } from "../../../app/routes/appRoutes";

interface IProps {
  route: RouteValue;
  name: string;
}

const LinkListItem = (props: IProps) => {
  return (
    <li>
      <Link to={props.route}>{props.name}</Link>
    </li>
  );
};

export default LinkListItem;
