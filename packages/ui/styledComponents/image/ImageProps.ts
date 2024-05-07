import BaseProps from "../../shared/props/base/BaseProps";

interface ImageProps extends BaseProps {
  src: string;
  srcSmall: string;
  alt: string;
  loading?: "lazy" | "eager";
}

export default ImageProps;
