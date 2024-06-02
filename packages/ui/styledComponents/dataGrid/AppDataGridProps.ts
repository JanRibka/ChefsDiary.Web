import AppTableBaseProps from "./AppTableBaseProps";
import TableBodyProps from "./dataGridBody/TableBodyProps";
import SearchProps from "./search/SearchProps";
import TableHeadProps from "./tableHead/TableHeadProps";

interface AppDataGridProps
  extends TableHeadProps,
    TableBodyProps,
    SearchProps,
    AppTableBaseProps {}

export default AppDataGridProps;
