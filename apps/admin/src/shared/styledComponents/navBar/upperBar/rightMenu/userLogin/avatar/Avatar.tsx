import * as ReactAvatar from "@radix-ui/react-avatar";

const Avatar = () => {
  return (
    <div className="h-full w-full">
      <ReactAvatar.Root className="bg-primary inline-flex items-center justify-center h-10 w-10 select-none overflow-hidden rounded-full align-middle">
        <ReactAvatar.Image
          className="h-full w-full rounded-[inherit] object-cover"
          src=""
          alt=""
        />
        <ReactAvatar.Fallback
          className="leading-1 flex h-full w-full items-center justify-center text-base font-medium"
          delayMs={600}
        >
          JR
        </ReactAvatar.Fallback>
      </ReactAvatar.Root>
    </div>
  );
};

export default Avatar;
