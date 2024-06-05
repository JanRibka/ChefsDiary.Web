import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

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
      return <ImCross color="gray" />;
    } else {
      return undefined;
    }
  };

  return <DataGridCellBase {...restProps}>{renderContent()}</DataGridCellBase>;
};

export default DataGridCellBoolean;
