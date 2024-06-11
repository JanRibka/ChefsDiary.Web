import typeToComponentConversionMap from "../conversionMaps/typeToComponentConversionMap";
import {
  DataGridColumnDefinitionActions,
  DataGridColumnDefinitionDate,
} from "../dataGridHead/DataGridColumnDefinition";
import ColumnValueType from "../types/ColumnValueType";
import { GridRowId } from "../types/gridRows";
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
              debugger;
              return (
                <>
                  {typeToComponentConversionMap[column.type as ColumnValueType](
                    {
                      value:
                        (row[column.field] as
                          | string
                          | number
                          | boolean
                          | Date
                          | null) ?? null,
                      indexItem: indexItem,
                      indexRow: indexRow,
                      name: column.field,
                      dateFormat: (column as DataGridColumnDefinitionDate)
                        .dateFormat,
                      rowId: row.id as GridRowId,
                      getActions: (column as DataGridColumnDefinitionActions)
                        .getActions,
                    }
                  )}
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
