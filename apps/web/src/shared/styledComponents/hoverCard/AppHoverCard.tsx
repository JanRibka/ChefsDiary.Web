import * as HoverCard from "@radix-ui/react-hover-card";

interface Props {
  trigger: JSX.Element;
  triggerClassName?: string;
  content: JSX.Element;
  contentClassName?: string;
}
// TODO: Dat shadow do default theme
const AppHoverCard = (props: Props) => {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild className={props.triggerClassName}>
        {props.trigger}
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className={
            props.contentClassName +
            ` data-[side=bottom]:animate-slideUpFade
            data-[side=right]:animate-slideLeftFade
            data-[side=left]:animate-slideRightFade
            data-[side=top]:animate-slideDownFade
            rounded-md bg-background p-5
            shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]
            data-[state=open]:transition-all`
          }
          sideOffset={5}
        >
          <>
            {props.content} <HoverCard.Arrow className="fill-white" />
          </>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};

export default AppHoverCard;
