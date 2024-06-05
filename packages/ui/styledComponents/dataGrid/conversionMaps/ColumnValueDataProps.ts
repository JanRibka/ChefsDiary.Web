interface ColumnValueDataProps {
  value: string | number | boolean | Date | null;
  indexItem: number;
  indexRow: number;
  name: string;
  dateFormat?: string;
}

export default ColumnValueDataProps;
