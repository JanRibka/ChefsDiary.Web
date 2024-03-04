import { Outlet } from "react-router-dom";

const LayoutLoginMain = () => {
  return (
    <main>
      <div className="container">
        <div className="flex flex-col lg:flex-row py-4">
          <section>kjlk</section>
          <section>
            sdfs
            <Outlet />
          </section>
        </div>
      </div>
    </main>
  );
};

export default LayoutLoginMain;
