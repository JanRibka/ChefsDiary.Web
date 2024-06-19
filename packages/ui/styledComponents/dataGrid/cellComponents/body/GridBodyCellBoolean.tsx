import { cellVariants } from "./cellVariants";

interface GridBodyCellBooleanProps {
  value: boolean | null;
  align?: "left" | "center" | "right";
}

const GridBodyCellBoolean = (props: GridBodyCellBooleanProps) => {
  const renderIcon = () => {
    if (props.value) {
      return <>✔</>;
    } else if (props.value === false) {
      return <>❌</>;
    } else {
      return null;
    }
  };

  return (
    <div className={cellVariants({ align: props.align })}>{renderIcon()}</div>
  );
};

export default GridBodyCellBoolean;
