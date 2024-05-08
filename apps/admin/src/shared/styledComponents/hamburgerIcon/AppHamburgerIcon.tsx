import { useSelector } from "react-redux";

import { selectSideBar } from "../../../app/store/sideBar/sideBarSlice";
import { useSideBarSlice } from "../../../app/store/sideBar/useSideBarSlice";
import HamburgerIcon from "./styledComponents/HamburgerIconLine";
import { hamburgerIconLine1Variants } from "./styledComponents/hamburgerIconLine1Variants";
import { hamburgerIconLine2Variants } from "./styledComponents/hamburgerIconLine2Variants";
import { hamburgerIconLine3Variants } from "./styledComponents/hamburgerIconLine3Variants";

const AppHamburgerIcon = () => {
  // Store
  const sideBar = useSelector(selectSideBar);
  const { setOpen } = useSideBarSlice();

  const handleOnClick = () => {
    setOpen(!sideBar.open);
  };

  return (
    <div className="cursor-pointer z-10" onClick={handleOnClick}>
      <HamburgerIcon
        className={hamburgerIconLine1Variants({ opened: sideBar.open })}
      />
      <HamburgerIcon
        className={hamburgerIconLine2Variants({ opened: sideBar.open })}
      />
      <HamburgerIcon
        className={hamburgerIconLine3Variants({ opened: sideBar.open })}
      />
    </div>
  );
};

export default AppHamburgerIcon;
