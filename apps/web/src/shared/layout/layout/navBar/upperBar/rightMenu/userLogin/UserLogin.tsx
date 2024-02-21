import { FaRegCircleUser } from "react-icons/fa6";

import AppHoverCard from "../../../../../../styledComponents/hoverCard/AppHoverCard";
import Icon from "../../../../../../styledComponents/icon/Icon";

const UserLogin = () => {
  return (
    <AppHoverCard
      trigger={<Icon icon={<FaRegCircleUser />} />}
      content={<div>Jsem tu asdf asdf asdf asdf asdf</div>}
    />
  );
};

export default UserLogin;
