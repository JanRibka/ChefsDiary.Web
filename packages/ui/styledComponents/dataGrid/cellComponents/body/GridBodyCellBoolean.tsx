import GridBodyCellBase, { GridBodyCellBaseProps } from "./GridBodyCellBase";

interface GridBodyCellBooleanProps
  extends Omit<GridBodyCellBaseProps, "children"> {
  value: boolean | null;
}

const GridBodyCellBoolean = (props: GridBodyCellBooleanProps) => {
  const { align, value, ...restProps } = props;

  const renderIcon = () => {
    if (value) {
      return <>✔</>;
    } else if (value === false) {
      return <>❌</>;
    } else {
      return null;
    }
  };

  return (
    <GridBodyCellBase align={align} {...restProps}>
      {renderIcon()}
    </GridBodyCellBase>
  );
};

export default GridBodyCellBoolean;
