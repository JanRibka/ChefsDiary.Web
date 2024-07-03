import { IoMdClose } from "react-icons/io";

import * as Popover from "@radix-ui/react-popover";

import AppPopoverProps from "./AppPopoverProps";

const AppPopover = (props: AppPopoverProps) => {
  // Props
  const { children, content, setClose } = props;

  return (
    <Popover.Root open={props.open}>
      <Popover.Trigger asChild>{children ?? <div></div>}</Popover.Trigger>

      <Popover.Content className="min-w-56 bg-background rounded-md p-2 shadow-dialog z-20 flex flex-col">
        <div className="flex justify-end">
          <Popover.Close
            className="rounded-full h-6 w-6 inline-flex text-lg items-center justify-center hover:bg-primary/10 cursor-pointer"
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              setClose?.();
            }}
          >
            <IoMdClose />
          </Popover.Close>
        </div>
        {content}
      </Popover.Content>
    </Popover.Root>
  );
};

export default AppPopover;
