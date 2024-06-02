import TableBodyProps from "./TableBodyProps";
import { tableBodyVariants } from "./tableBodyVariants";

const TableBody = (props: TableBodyProps) => {
  return (
    <tbody>
      {props.rows.map((row, indexRow) => {
        const isEvenRow = (indexRow + 1) % 2 === 0;

        return (
          <tr
            key={`table-row_${props.name}_${indexRow}`}
            className={tableBodyVariants({ isEven: isEvenRow })}
          >
            {props.columns.map((column, indexItem) => {
              return (
                <td
                  key={`table-row_${props.name}_${indexRow}_${indexItem}`}
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
