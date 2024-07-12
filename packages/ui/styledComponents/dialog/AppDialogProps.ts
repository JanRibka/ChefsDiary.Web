import { Dispatch, ReactNode, SetStateAction } from "react";

interface AppDialogProps {
  content: ReactNode;
  description?: string;
  title?: string;
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

export default AppDialogProps;
