interface TableBodyProps {
  data: any[][];
}

const TableBody = (props: TableBodyProps) => {
  return <tbody>{props.data.map((item, index))}</tbody>;
};

export default TableBody;
