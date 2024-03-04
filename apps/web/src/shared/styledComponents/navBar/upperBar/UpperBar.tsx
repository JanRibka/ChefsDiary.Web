import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

import SocialIcons from "../../socialIcons/SocialIcons";
import MainMenu from "./mainMenu/MainMenu";
import RightMenu from "./rightMenu/RightMenu";

const UpperBar = () => {
  return (
    <div className="h-16 flex items-center justify-center px-6 md:px-9">
      <div className="w-full lg:max-w-main flex items-center flex-row justify-end md:justify-between">
        <SocialIcons
          facebookIcon={<FaFacebookF />}
          instagramIcon={<FaInstagram />}
          tikTokIcon={<FaTiktok />}
          className="hidden md:flex"
        />

        <MainMenu />

        <RightMenu />
      </div>
    </div>
  );
};

export default UpperBar;
