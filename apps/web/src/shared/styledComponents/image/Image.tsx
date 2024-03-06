import { useRef } from "react";

import { ImageProps } from "@repo/shared/interfaces";

const Image = (props: ImageProps) => {
  // Reference
  const ref = useRef<HTMLImageElement>(null);
  const refImageSmall = useRef<HTMLDivElement>(null);

  // Props
  const { loading, srcSmall, ...restProps } = props;

  // Other
  const handleOnLoad = () => {
    refImageSmall.current?.classList.remove("before:content-['']");
    refImageSmall.current?.classList.add("before:content-none");

    ref.current?.classList.remove("opacity-0");
    ref.current?.classList.add("opacity-100");
  };

  return (
    <div
      ref={refImageSmall}
      className="relative bg-cover bg-center w-full h-full before:content-[''] before:absolute before:inset-0 before:bg-white before:opacity-10 before:animate-pulse"
      style={{ backgroundImage: `url(${srcSmall})` }}
    >
      <img
        ref={ref}
        loading={loading ?? "lazy"}
        className="w-full h-full opacity-0 object-center object-cover transition-opacity ease-in-out duration-200"
        {...restProps}
        onLoad={handleOnLoad}
      />
    </div>
  );
};

export default Image;
