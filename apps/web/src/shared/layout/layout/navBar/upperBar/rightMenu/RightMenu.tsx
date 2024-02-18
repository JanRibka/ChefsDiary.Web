import Search from "./search/Search";
import UserLogin from "./userLogin/UserLogin";

const RightMenu = () => {
  return (
    <div className="flex">
      <Search />
      <UserLogin />
    </div>
  );
};

export default RightMenu;
