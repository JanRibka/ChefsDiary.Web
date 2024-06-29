import { MouseEvent, ReactNode } from "react";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface DropdownMenuItemProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

const AppDropDownMenuItem = (props: DropdownMenuItemProps) => {
  // Props
  const { children, onClick } = props;

  return (
    <DropdownMenu.Item
      className="group text-lg leading-none rounded-xs flex items-center h-6 px-2 relative pl-6 select-none"
      onClick={onClick}
    >
      {children}
    </DropdownMenu.Item>
  );
};

export default AppDropDownMenuItem;
