import { Outlet } from "react-router-dom";

const LayoutLoginContent = () => {
  return (
    <section className="w-full lg:lg:w-2/5">
      <div className="py-10 h-full bg-dialogBackground rounded-b-md lg:rounded-bl-none lg:rounded-tr-md">
        <div className="mx-3 h-full flex items-center">
          <div className="px-2 w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayoutLoginContent;
