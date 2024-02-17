import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

import SocialIcons from "../../../../styledComponents/socialIcons/SocialIcons";

const UpperBar = () => {
  return (
    <div className="h-16 flex items-center justify-center px-6 md:px-9">
      <div className="w-full lg:max-w-main">
        <SocialIcons
          facebookIcon={<FaFacebookF />}
          instagramIcon={<FaInstagram />}
          tikTokIcon={<FaTiktok />}
          className="hidden md:flex"
        />
      </div>
    </div>
  );
};

export default UpperBar;
