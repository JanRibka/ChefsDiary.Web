import AppTableProps from "./AppTableProps";
import TableBody from "./tableBody/TableBody";
import TableHead from "./tableHead/TableHead";

const AppTable = (props: AppTableProps) => {
  return (
    <div className="overflow-hidden rounded-md shadow-md">
      <table className="w-full text-sm text-left">
        <TableHead columns={props.columns} />
        <TableBody rows={props.rows} columns={props.columns} />
      </table>
    </div>
  );
};

export default AppTable;
