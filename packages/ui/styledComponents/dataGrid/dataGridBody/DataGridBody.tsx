import typeToComponentConversionMap from "../conversionMaps/typeToComponentConversionMap";
import { DataGridColumnDefinitionDate } from "../dataGridHead/DataGridColumnDefinition";
import ColumnValueType from "../types/ColumnValueType";
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
              const newColumn = { ...column } as DataGridColumnDefinitionDate;

              return (
                <>
                  {typeToComponentConversionMap[
                    newColumn.type as ColumnValueType
                  ]({
                    value:
                      (row[newColumn.field] as
                        | string
                        | number
                        | boolean
                        | Date
                        | null) ?? null,
                    indexItem: indexItem,
                    indexRow: indexRow,
                    name: newColumn.field,
                    dateFormat: newColumn.dateFormat,
                  })}
                </>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
