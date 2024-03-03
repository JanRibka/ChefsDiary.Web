import { Link } from "react-router-dom";

import { RouteValue } from "../../../app/routes/appRoutes";

interface Props {
  route: RouteValue;
  name: string;
}

const LinkListItem = (props: Props) => {
  return (
    <li>
      <Link to={props.route}>{props.name}</Link>
    </li>
  );
};

export default LinkListItem;
