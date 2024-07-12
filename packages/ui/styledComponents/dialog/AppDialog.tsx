import { IoClose } from "react-icons/io5";

import * as Dialog from "@radix-ui/react-dialog";

import D3SIconButton from "../buttonIcon/AppButtonIcon";
import AppDialogProps from "./AppDialogProps";

const AppDialog = (props: AppDialogProps) => {
  // Props
  const { content, open, setOpen, title, description } = props;

  return (
    <Dialog.Root open={open}>
      <Dialog.Trigger asChild>Open</Dialog.Trigger>

      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 data-[state=open]:animate-overlayShow" />

      <Dialog.Content className="min-w-96 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md w-max bg-background p-6 shadow-dialog focus:outline-none data-[state=open]:animate-contentShow">
        <div className="flex items-center justify-between">
          <Dialog.Title className="text-sm">{title}</Dialog.Title>

          <Dialog.Close asChild>
            <D3SIconButton onClick={() => setOpen?.(false)}>
              <IoClose />
            </D3SIconButton>
          </Dialog.Close>
        </div>

        <div className="mt-2">
          {description && (
            <Dialog.Description>{description}</Dialog.Description>
          )}

          {content}
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default AppDialog;
