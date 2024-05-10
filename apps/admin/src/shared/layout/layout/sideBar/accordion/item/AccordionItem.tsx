import { useRef } from 'react';
import { AiFillCaretRight } from 'react-icons/ai';

import { accordionItemButtonVariants } from './accordionItemButtonVariants';
import { accordionItemIconVariants } from './accordionItemIconVariants';
import AccordionItemProps from './AccordionItemProps';

const AccordionItem = (props: AccordionItemProps) => {
  // References
  const refContent = useRef<HTMLDivElement>(null);

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
        <div className="flex w-full items-center">
          {props.labelIcon && <props.labelIcon />}
          <p className="ml-3">{props.label}</p>
        </div>
        <AiFillCaretRight
          className={accordionItemIconVariants({ opened: isOpened })}
        />
      </button>

      <div ref={refContent}>{props.content}</div>
    </li>
  );
};

export default AccordionItem;
