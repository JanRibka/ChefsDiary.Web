import { NavLink } from "react-router-dom";

import { RouteValue } from "../../../app/routes/appRoutes";

interface Props {
  route: RouteValue;
  name: string;
}
//TODO: Automaticky se nastav9 class active. Pokud active nastylovat, nebo pou69t isActive
const LinkListItem = (props: Props) => {
  return (
    <li>
      <NavLink
        to={props.route}
        // className={({ isActive }) => {
        //   return isActive ? "" : "";
        // }}
      >
        {props.name}
      </NavLink>
    </li>
  );
};

export default LinkListItem;
