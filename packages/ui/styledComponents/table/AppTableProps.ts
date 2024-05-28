import AppTableBaseProps from "./AppTableBaseProps";
import SearchProps from "./search/SearchProps";
import TableBodyProps from "./tableBody/TableBodyProps";
import TableHeadProps from "./tableHead/TableHeadProps";

interface AppTableProps
  extends TableHeadProps,
    TableBodyProps,
    SearchProps,
    AppTableBaseProps {}

export default AppTableProps;
