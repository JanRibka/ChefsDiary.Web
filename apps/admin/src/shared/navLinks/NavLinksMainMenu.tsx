import { AppRoutes } from "../../app/routes/appRoutes";
import LinkListItem from "../styledComponents/linkListItem/LinkListItem";

const NavLinksMainMenu = () => {
  return (
    <nav>
      <ul className="flex">
        <LinkListItem route={AppRoutes.Home} name="Domů" />
      </ul>
    </nav>
  );
};

export default NavLinksMainMenu;
