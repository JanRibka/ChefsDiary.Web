import GridBodyCellBase, { GridBodyCellBaseProps } from "./GridBodyCellBase";

interface GridBodyCellStringProps
  extends Omit<GridBodyCellBaseProps, "children"> {
  value: string | null;
}

const GridBodyCellString = (props: GridBodyCellStringProps) => {
  const { align, ...restProps } = props;

  return (
    <GridBodyCellBase align={align} {...restProps}>
      {props.value}
    </GridBodyCellBase>
  );
};

export default GridBodyCellString;
