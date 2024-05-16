import { ReactNode } from "react";

interface TableProps {
  children: ReactNode;
}

const Table = (props: TableProps) => {
  return <table className="w-full text-sm text-left">{props.children}</table>;
};

export default Table;
