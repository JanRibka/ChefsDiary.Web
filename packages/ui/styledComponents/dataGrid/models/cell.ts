import { MouseEvent, ReactElement, ReactNode } from "react";

import { BaseProps } from "@repo/shared/props";

import { GridRowParams } from "../../params/gridRowParams";
import { GridRowId } from "../types/gridRows";

export interface DataGridCellBaseProps extends BaseProps {
  name: string;
  indexRow: number;
  indexItem: number;
  children: ReactNode;
}

export interface DataGridCellActionItemProps {
  label: string;
  icon: ReactElement;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export interface DataGridCellActionsProps
  extends Omit<DataGridCellBaseProps, "children"> {
  rowId?: GridRowId;
  getActions?: (params: GridRowParams) => DataGridCellActionItemProps[];
}

export interface DataGridCellBooleanProps
  extends Omit<DataGridCellBaseProps, "children"> {
  value: boolean | null;
}

export interface DataGridCellDateProps
  extends Omit<DataGridCellBaseProps, "children"> {
  value: Date | null;
  dateFormat?: string;
}

export interface DataGridCellStringProps
  extends Omit<DataGridCellBaseProps, "children"> {
  value: string | null;
}
