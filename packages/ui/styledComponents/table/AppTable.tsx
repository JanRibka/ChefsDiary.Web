import AppTableProps from "./AppTableProps";
import TableBody from "./tableBody/TableBody";
import TableHead from "./tableHead/TableHead";

const AppTable = (props: AppTableProps) => {
  return (
    <table className="w-full text-sm text-left">
      <TableHead columns={props.columns} />
      <TableBody rows={props.rows} columns={props.columns} />
    </table>
  );
};

export default AppTable;
