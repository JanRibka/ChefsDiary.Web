import { ReactNode } from "react";

interface AppHoverCardProps {
  trigger: ReactNode;
  content?: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  disable?: boolean;
}

export default AppHoverCardProps;
