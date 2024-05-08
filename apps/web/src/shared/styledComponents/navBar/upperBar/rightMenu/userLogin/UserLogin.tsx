import { FaRegCircleUser } from "react-icons/fa6";

import { AppHoverCard, AppIcon } from "@repo/ui/styledComponents";

const UserLogin = () => {
  return (
    <AppHoverCard
      trigger={<AppIcon icon={<FaRegCircleUser />} />}
      content={<div>Jsem tu asdf asdf asdf asdf asdf</div>}
    />
  );
};

export default UserLogin;
