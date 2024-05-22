import { FiHome } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

import { AppIcon } from "@repo/ui/styledComponents";

import { AppRoutes } from "../../../../../../app/routes/appRoutes";

const HomeIcon = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnClick = () => {
    navigate(AppRoutes.Home, { state: { from: location } });
  };

  return (
    <AppIcon icon={<FiHome fontSize="x-large" />} onClick={handleOnClick} />
  );
};

export default HomeIcon;
