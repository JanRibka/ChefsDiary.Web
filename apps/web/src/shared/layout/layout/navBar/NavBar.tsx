import BottomBar from "./bottomBar/BottomBar";
import UpperBar from "./upperBar/UpperBar";

const NavBar = () => {
  return (
    <header className="bg-page-primary">
      <UpperBar />
      <BottomBar />
    </header>
  );
};

export default NavBar;
