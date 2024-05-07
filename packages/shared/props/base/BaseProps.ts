import { RefObject } from "react";

interface BaseProps {
  id?: string;
  className?: string;
  tabIndex?: number;
  ref?: RefObject<any>;
}

export default BaseProps;
