interface ImageProps {
  source: string;
  sourceSmall: string;
  alt: string;
  loading?: "lazy" | "eager";
}

export default ImageProps;
