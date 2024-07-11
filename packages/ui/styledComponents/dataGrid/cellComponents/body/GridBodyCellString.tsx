import GridBodyCellBase, { GridBodyCellBaseProps } from "./GridBodyCellBase";

interface GridBodyCellStringProps
  extends Omit<GridBodyCellBaseProps, "children"> {
  value: string | null;
}

const GridBodyCellString = (props: GridBodyCellStringProps) => {
  const { align, value, ...restProps } = props;

  return (
    <GridBodyCellBase align={align} {...restProps}>
      {value}
    </GridBodyCellBase>
  );
};

export default GridBodyCellString;
