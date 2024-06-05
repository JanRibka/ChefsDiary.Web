import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import DataGridCellBase, { DataGridCellBaseProps } from "./DataGridCellBase";

interface DataGridCellBooleanProps
  extends Omit<DataGridCellBaseProps, "children"> {
  value: boolean | null;
}

const DataGridCellBoolean = (props: DataGridCellBooleanProps) => {
  const { value, ...restProps } = props;

  const renderContent = () => {
    if (value) {
      return <FaCheck />;
    } else if (value === false) {
      return <RxCross2 />;
    } else {
      return undefined;
    }
  };

  return <DataGridCellBase {...restProps}>{renderContent()}</DataGridCellBase>;
};

export default DataGridCellBoolean;
