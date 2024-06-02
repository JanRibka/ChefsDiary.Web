import { ReactNode } from "react";

class TableRowDefinition {
  [key: string]: ReactNode;

  public constructor(row: Record<string, ReactNode>) {
    Object.assign(this, row);
  }
}

export default TableRowDefinition;
