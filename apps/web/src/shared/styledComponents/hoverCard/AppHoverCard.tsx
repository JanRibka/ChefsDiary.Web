import * as HoverCard from "@radix-ui/react-hover-card";

interface IProps {
  trigger: JSX.Element;
  triggerClassName?: string;
  content: JSX.Element;
  contentClassName?: string;
}

const AppHoverCard = (props: IProps) => {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild className={props.triggerClassName}>
        {/* {props.trigger} */}
        <div>fsfd</div>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className={
            props.contentClassName +
            ` data-[side=bottom]:animate-hoverCardSlideUpFade
            data-[side=right]:animate-hoverCardSlideLeftFade
            data-[side=left]:animate-hoverCardSlideRightFade
            data-[side=top]:animate-hoverCardSlideDownFade
            rounded-md bg-white p-5
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
