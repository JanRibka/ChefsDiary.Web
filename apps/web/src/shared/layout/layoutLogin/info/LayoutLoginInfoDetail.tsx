import Image from "../../../styledComponents/image/Image";
import logo from "../img/logo-light.png";

const LayoutLoginInfoDetail = () => {
  // TODO: Tady se bude na49tat dodatecne info, podle videa router. Je to n2kde na konci
  return (
    <div className="z-2 w-full h-full flex flex-col">
      <div className="flex">
        <div className="mx-5">
          <div className="my-5 lg:mb-0">
            {/* // <div className="z-2 relative mx-auto flex flex-col h-full w-full box-border gap-0">
    //   <div className="gap-0 flex flex-wrap">
    //     <div className="mx-auto columns-11 lg:columns-10 w-full max-w-full px-3">
    //       <div className="my-10 box-border"> */}
            <a
              href={import.meta.env.BASE_URL}
              title={import.meta.env.VITE_APP_NAME}
            >
              <Image
                source={logo}
                sourceSmall=""
                alt={`Logo | ${import.meta.env.VITE_APP_NAME}`}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="z-0">V9tejte</div>
    </div>
  );
};

export default LayoutLoginInfoDetail;
