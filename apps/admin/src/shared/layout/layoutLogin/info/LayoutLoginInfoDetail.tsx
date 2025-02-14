import { AppImage } from "@repo/ui/styledComponents";

import logo from "../img/logo-light.png";

const LayoutLoginInfoDetail = () => {
  // TODO: Tady se bude na49tat dodatecne info, podle videa router. Je to n2kde na konci
  return (
    <div className="z-2 w-full h-full flex flex-col relative">
      <div className="flex w-full">
        <div className="mx-5 md:mx-12 w-full">
          <div className="my-12 lg:mb-0 w-fit">
            <a
              href={import.meta.env.BASE_URL}
              title={import.meta.env.VITE_APP_NAME}
            >
              <AppImage
                src={logo}
                srcSmall=""
                alt={`Logo | ${import.meta.env.VITE_APP_NAME}`}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="z-0 h-full flex items-center">
        <div className="mx-5 md:mx-12">
          <div className="mb-12">
            <h1 className="text-white mb-6">Vítejte zpět!</h1>
            <em className="text-white tracking-wider">
              Získejte přístup k administraci webu Kuchařův deník
            </em>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutLoginInfoDetail;
