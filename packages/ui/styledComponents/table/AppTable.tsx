import AppTableProps from "./AppTableProps";
import Search from "./search/Search";
import TableBody from "./tableBody/TableBody";
import TableHead from "./tableHead/TableHead";

const AppTable = (props: AppTableProps) => {
  return (
    <div className="rounded-md border-1 p-4 shadow-md">
      <div className="">
        <Search search={props.search} />
        <div className="rounded-md overflow-hidden">
          <table className="w-full text-sm text-left">
            <TableHead columns={props.columns} name={props.name} />
            <TableBody
              rows={props.rows}
              columns={props.columns}
              name={props.name}
            />
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppTable;
