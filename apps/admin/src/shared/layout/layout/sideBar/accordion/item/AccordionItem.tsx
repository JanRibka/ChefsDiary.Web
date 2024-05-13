import { AiFillCaretRight } from 'react-icons/ai';
import { useSelector } from 'react-redux';

import { selectSideBar } from '../../../../../../app/store/sideBar/sideBarSlice';
import { accordionItemButtonVariants } from './accordionItemButtonVariants';
import { accordionItemContentVariants } from './accordionItemContentVariants';
import { accordionItemIconVariants } from './accordionItemIconVariants';
import { accordionItemLabelVariants } from './accordionItemLabelVariants';
import AccordionItemProps from './AccordionItemProps';

const AccordionItem = (props: AccordionItemProps) => {
  // Store
  const sideBar = useSelector(selectSideBar);

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
          <p
            className={accordionItemLabelVariants({
              sideBarOpened: sideBar.open,
            })}
          >
            {props.label}
          </p>
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
