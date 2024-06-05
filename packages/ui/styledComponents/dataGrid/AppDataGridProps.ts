import AppTableBaseProps from "./AppDataGridBaseProps";
import TableBodyProps from "./dataGridBody/TableBodyProps";
import TableHeadProps from "./dataGridHead/DataGridHeadProps";
import SearchProps from "./search/SearchProps";

interface AppDataGridProps
  extends TableHeadProps,
    TableBodyProps,
    SearchProps,
    AppTableBaseProps {}

export default AppDataGridProps;
