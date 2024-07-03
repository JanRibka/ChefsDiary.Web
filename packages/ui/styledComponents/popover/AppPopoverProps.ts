import { ReactNode } from "react";

interface AppPopoverProps {
  children?: ReactNode;
  content: ReactNode;
  open?: boolean;
  setClose?: () => void;
}

export default AppPopoverProps;
