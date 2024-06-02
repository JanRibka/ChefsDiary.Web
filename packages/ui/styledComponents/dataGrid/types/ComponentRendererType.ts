import { ReactElement } from "react";

import ColumnValueType from "./ColumnValueType";

type ComponentRendererType = (value: keyof ColumnValueType) => ReactElement;

export default ComponentRendererType;
