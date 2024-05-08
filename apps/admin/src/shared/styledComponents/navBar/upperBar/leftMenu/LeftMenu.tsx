import AppHamburgerIcon from "../../../hamburgerIcon/AppHamburgerIcon";
import HomeIcon from "./home/HomeIcon";

const LeftMenu = () => {
  return (
    <div className="flex flex-row items-center">
      <HomeIcon />
      <div className="ml-7">
        <AppHamburgerIcon />
      </div>
    </div>
  );
};

export default LeftMenu;
