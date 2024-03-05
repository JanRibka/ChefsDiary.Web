import login from "../img/login-bg.jpg";
import LayoutLoginInfoDetail from "./LayoutLoginInfoDetail";

const LayoutLoginInfo = () => {
  return (
    <section className="w-full h-full">
      <div className="sha rounded-t-md lg:rounded-e-none lg:rounded-s-md relative overflow-hidden min-h-60 h-full w-full flex items-center ">
        <div
          className="z-0 absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover transition-background-image ease-in delay-300"
          style={{ backgroundImage: `url(${login})` }}
        />
        <div className="z-1 absolute top-0 left-0 w-full h-full bg-primary opacity-80" />
        <LayoutLoginInfoDetail />
      </div>
    </section>
  );
};

export default LayoutLoginInfo;
