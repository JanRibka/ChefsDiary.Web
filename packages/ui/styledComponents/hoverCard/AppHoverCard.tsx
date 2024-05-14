import * as HoverCard from "@radix-ui/react-hover-card";

import AppHoverCardProps from "./AppHoverCardProps";

// TODO: Pokud content je pr8zdn7, nic se nezobraz9
const AppHoverCard = (props: AppHoverCardProps) => {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>{props.trigger}</HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          side={props.side}
          hidden={props.disable || !props.content}
          className={`data-[side=bottom]:animate-slideUpFade 
              data-[side=right]:animate-slideLeftFade 
              data-[side=left]:animate-slideRightFade
              data-[side=top]:animate-slideDownFade
              rounded-[0.5rem] bg-dialogBackground p-[1rem]
              shadow-dialog data-[state=open]:transition-all`}
          sideOffset={5}
        >
          <>
            {props.content}{" "}
            <HoverCard.Arrow className="fill-dialogBackground" />
          </>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};

export default AppHoverCard;
