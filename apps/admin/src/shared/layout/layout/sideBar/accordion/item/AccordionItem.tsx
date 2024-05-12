import { AiFillCaretRight } from "react-icons/ai";

import { accordionItemButtonVariants } from "./accordionItemButtonVariants";
import { accordionItemContentVariants } from "./accordionItemContentVariants";
import { accordionItemIconVariants } from "./accordionItemIconVariants";
import AccordionItemProps from "./AccordionItemProps";

const AccordionItem = (props: AccordionItemProps) => {
  // Constants
  const isOpened = props.value === props.actualValue;

  // Other
  const handleOnClick = () => {
    props.onClick(props.value);
  };

  return (
    <li className="px-4 my-1">
      <button
        onClick={handleOnClick}
        className={accordionItemButtonVariants({ opened: isOpened })}
      >
        <div className="flex w-full items-center justify-start md:justify-center xl:justify-start">
          {props.labelIcon && (
            <props.labelIcon className="text-xl md:text-3xl xl:text-2xl" />
          )}
          <p className="ml-3 md:hidden xl:block">{props.label}</p>
        </div>

        {props.content && (
          <AiFillCaretRight
            className={accordionItemIconVariants({ opened: isOpened })}
          />
        )}
      </button>

      {props.content && (
        <div className={accordionItemContentVariants({ opened: isOpened })}>
          {props.content}
        </div>
      )}
    </li>
  );
};

export default AccordionItem;
