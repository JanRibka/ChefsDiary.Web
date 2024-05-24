import TableHeadProps from "../tableHead/TableHeadProps";
import TableRowDefinition from "./TableRowDefinition";

interface TableBodyProps extends Pick<TableHeadProps, "columns"> {
  rows: TableRowDefinition[];
}

export default TableBodyProps;
