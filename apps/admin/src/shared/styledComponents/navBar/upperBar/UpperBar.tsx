import LeftMenu from './leftMenu/LeftMenu';
import RightMenu from './rightMenu/RightMenu';

const UpperBar = () => {
  return (
    <div className="h-16 flex items-center justify-center px-6 md:px-9">
      <div className="w-full flex items-center flex-row justify-between">
        <LeftMenu />
        <RightMenu />
      </div>
    </div>
  );
};

export default UpperBar;
