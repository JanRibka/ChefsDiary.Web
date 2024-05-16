import Table from "../../../shared/styledComponents/table/table/Table";
import TableBody from "../../../shared/styledComponents/table/tableBody/TableBody";
import TableHead from "../../../shared/styledComponents/table/tableHead/TableHead";

const UsersTable = () => {
  const columns: string[] = ["Name", "Email", "Role", "Status", "Actions"];
  const data: any[][] = [];

  return (
    <div>
      <Table>
        <TableHead columns={columns} />
        <TableBody />
      </Table>
    </div>
  );
};

export default UsersTable;
