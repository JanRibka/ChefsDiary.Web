import { ReactNode } from "react";

import { mergeStyles } from "@repo/shared/helpers";

interface AppTableProps {
  children: ReactNode;
  className?: string;
}

const AppTable = (props: AppTableProps) => {
  const { children, className } = props;

  return <table className={mergeStyles("", className)}>{children}</table>;
};

export default AppTable;
