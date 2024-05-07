import { BaseProps } from "@repo/shared/props";

interface AppImageProps extends BaseProps {
  src: string;
  srcSmall: string;
  alt: string;
  loading?: "lazy" | "eager";
}

export default AppImageProps;
