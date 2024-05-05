import Avatar from "./avatar/Avatar";
import UserInfo from "./userInfo/UserInfo";

const UserLogin = () => {
  return (
    <div className="cursor-pointer flex items-center">
      <Avatar />
      <UserInfo />
    </div>
  );
};

export default UserLogin;
