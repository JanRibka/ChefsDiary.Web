import AppDataGridProps from './AppDataGridProps';
import TableBody from './dataGridBody/DataGridBody';
import TableHead from './dataGridHead/DataGridHead';
import Search from './search/Search';

const AppDataGrid = (props: AppDataGridProps) => {
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

export default AppDataGrid;
