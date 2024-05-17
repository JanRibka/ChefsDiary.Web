import TableRowDefinition from "./TableRowDefinition";

interface TableBodyProps {
  rows: TableRowDefinition[];
}

const TableBody = (props: TableBodyProps) => {
  return (
    <tbody>
      {props.rows.map((row, indexRow) => {
        return (
          <tr key={`table-row_${indexRow}`}>
            {Object.keys(row).map((key, indexItem) => {
              return (
                <td
                  key={`table-row_${indexRow}_${indexItem}`}
                  className="px-6 py-4"
                >
                  {row[key]}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
