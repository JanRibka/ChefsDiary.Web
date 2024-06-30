import { IoMdClose } from "react-icons/io";

import * as Popover from "@radix-ui/react-popover";

import AppPopoverProps from "./AppPopoverProps";

const AppPopover = (props: AppPopoverProps) => {
  // Props
  const { children, content } = props;

  return (
    <Popover.Root>
      <Popover.Trigger asChild>{children}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="min-w-56 bg-background rounded-md p-2 shadow-dialog">
          {content}
          <Popover.Close
            className="rounded-full h-6 w-6 inline-flex items-center justify-center absolute top-2 right-2 hover:bg-primary/10 outline cursor-default"
            aria-label="Close"
          >
            <IoMdClose />
          </Popover.Close>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default AppPopover;
