import AppTableBaseProps from "../AppDataGridBaseProps";
import TableRowDefinition from "./TableRowDefinition";

interface TableBodyProps extends AppTableBaseProps {
  rows: TableRowDefinition[];
}

export default TableBodyProps;
