import { FaRegUser } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { useSelector } from 'react-redux';

import { selectSideBar } from '../../../../app/store/sideBar/sideBarSlice';
import { useSideBarSlice } from '../../../../app/store/sideBar/useSideBarSlice';
import Accordion from './accordion/Accordion';
import AccordionItem from './accordion/item/AccordionItem';
import { sideBarVariants } from './sideBarVariants';

const SideBar = () => {
  // Store
  const sideBar = useSelector(selectSideBar);
  const { setActualValue } = useSideBarSlice();

  // Other
  const handleOnClick = (value: string) => {
    const selectedValue = value === sideBar.actualValue ? "" : value;

    setActualValue(selectedValue);
  };

  return (
    <aside className={sideBarVariants({ opened: sideBar.open })}>
      <div className="my-4 flex w-full h-full">
        <Accordion actualValue={sideBar.actualValue} onClick={handleOnClick}>
          <AccordionItem
            actualValue={sideBar.actualValue}
            content={[]}
            label="Dashboard"
            labelIcon={MdDashboard}
            onClick={handleOnClick}
            value="dashboard"
          />
          <AccordionItem
            actualValue={sideBar.actualValue}
            content={[]}
            label="Uživatel"
            labelIcon={FaRegUser}
            onClick={handleOnClick}
            value="user"
          />
        </Accordion>
      </div>
    </aside>
  );
};

export default SideBar;
