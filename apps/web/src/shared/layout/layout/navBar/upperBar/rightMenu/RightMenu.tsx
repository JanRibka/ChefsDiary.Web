import Search from "./search/Search";
import ThemeColor from "./themeColor/ThemeColor";
import UserLogin from "./userLogin/UserLogin";

const RightMenu = () => {
  return (
    <div className="flex [&>div:not(:last-of-type)]:mr-3">
      <Search />
      <UserLogin />
      <ThemeColor />
    </div>
  );
};

export default RightMenu;
