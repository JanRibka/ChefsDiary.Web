import { cellVariants } from "./cellVariants";

interface GridBodyCellStringProps {
  value: string | null;
  align?: "left" | "center" | "right";
}

const GridBodyCellString = (props: GridBodyCellStringProps) => {
  return (
    <span className={cellVariants({ align: props.align })}>{props.value}</span>
  );
};

export default GridBodyCellString;
