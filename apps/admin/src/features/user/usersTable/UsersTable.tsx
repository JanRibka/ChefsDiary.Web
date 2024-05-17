import Table from "../../../shared/styledComponents/table/table/Table";
import TableBody from "../../../shared/styledComponents/table/tableBody/TableBody";
import TableRowDefinition from "../../../shared/styledComponents/table/tableBody/TableRowDefinition";
import TableColumnDefinition from "../../../shared/styledComponents/table/tableHead/TableColumnDefinition";
import TableHead from "../../../shared/styledComponents/table/tableHead/TableHead";

const UsersTable = () => {
  const columns: TableColumnDefinition[] = [
    { label: "Name" },
    { label: "Email" },
  ];

  const rows: TableRowDefinition[] = [
    { name: "John Doe", email: "email" },
    { name: "Jane Doe2", email: "email2" },
  ];

  return (
    <div>
      <Table>
        <TableHead columns={columns} />
        <TableBody rows={rows} />
      </Table>
    </div>
  );
};

export default UsersTable;
