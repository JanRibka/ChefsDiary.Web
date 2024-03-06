import BaseProps from "../baseProps/BaseProps";

interface ImageProps extends BaseProps {
  src: string;
  srcSmall: string;
  alt: string;
  loading?: "lazy" | "eager";
}

export default ImageProps;
