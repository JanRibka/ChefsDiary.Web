export const COLUMNS_DIMENSION_PROPERTIES = [
  "maxWidth",
  "minWidth",
  "width",
  "flex",
] as const;

export type GridColumnDimensionProperties =
  (typeof COLUMNS_DIMENSION_PROPERTIES)[number];
