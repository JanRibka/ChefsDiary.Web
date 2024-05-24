import TableBodyProps from "./TableBodyProps";

const TableBody = (props: TableBodyProps) => {
  return (
    <tbody>
      {props.rows.map((row, indexRow) => {
        // TODO: Upravit klíče, aby byly jedinečné na stránce
        return (
          <tr key={`table-row_${indexRow}`}>
            {props.columns.map((column, indexItem) => {
              return (
                <td
                  key={`table-row_${indexRow}_${indexItem}`}
                  className="px-6 py-4"
                >
                  {row[column.field] ?? ""}
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
