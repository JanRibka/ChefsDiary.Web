import AppTableBaseProps from "../AppTableBaseProps";
import TableRowDefinition from "./TableRowDefinition";

interface TableBodyProps extends AppTableBaseProps {
  rows: TableRowDefinition[];
}

export default TableBodyProps;
