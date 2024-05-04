import * as ReactAvatar from "@radix-ui/react-avatar";

const Avatar = () => {
  return (
    <div className="h-full w-full">
      <ReactAvatar.Root className="bg-primary-light inline-flex items-center justify-center h-10 w-10 select-none overflow-hidden rounded-full align-middle">
        <ReactAvatar.Image />
        <ReactAvatar.Fallback>JR</ReactAvatar.Fallback>
      </ReactAvatar.Root>
    </div>
  );
};

export default Avatar;
