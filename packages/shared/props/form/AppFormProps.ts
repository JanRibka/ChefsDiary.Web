import { ReactNode } from "react";

import BaseProps from "../base/BaseProps";

interface AppFormProps extends BaseProps {
  children: ReactNode;
  handleAction: (data: FormData) => void;
}

export default AppFormProps;
