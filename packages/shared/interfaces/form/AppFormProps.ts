import { ReactNode } from "react";

import BaseProps from "../baseProps/BaseProps";

interface AppFormProps extends BaseProps {
  children: ReactNode;
  handleAction: (data: FormData) => void;
}

export default AppFormProps;
