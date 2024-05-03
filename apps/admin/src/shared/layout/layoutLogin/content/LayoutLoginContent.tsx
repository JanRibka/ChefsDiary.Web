import { Outlet } from "react-router-dom";

const LayoutLoginContent = () => {
  return (
    <section className="w-full lg:lg:w-2/5">
      <div className="py-10">
        <div className="mx-3">
          <div className="px-2">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayoutLoginContent;
