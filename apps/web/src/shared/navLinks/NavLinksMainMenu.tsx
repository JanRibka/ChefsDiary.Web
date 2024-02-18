import { AppRoutes } from "../../app/routes/appRoutes";
import LinkListItem from "../styledComponents/linkListItem/LinkListItem";

const NavLinksMainMenu = () => {
  return (
    <nav>
      <ul className="flex">
        <LinkListItem route={AppRoutes.Home} name="Domů" />
        <LinkListItem route={AppRoutes.Recipes} name="Recepty" />
        <LinkListItem route={AppRoutes.TipsAndTricks} name="Tipy a triky" />
        <LinkListItem route={AppRoutes.Wordbook} name="Slovník" />
        <LinkListItem route={AppRoutes.Substitutes} name="Náhrady potravin" />
      </ul>
    </nav>
  );
};

export default NavLinksMainMenu;
