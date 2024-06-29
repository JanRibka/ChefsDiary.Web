import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import AppDropDownMenuProps from "./AppDropDownMenuProps";

const AppDropDownMenu = (props: AppDropDownMenuProps) => {
  // Props
  const { children, content } = props;

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
      <DropdownMenu.Content
        className="min-w-56 bg-background rounded-md p-2 shadow-dialog"
        sideOffset={5}
      >
        {content}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default AppDropDownMenu;
