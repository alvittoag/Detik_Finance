// ** Import Constanst
import { sideItems } from "../constants";

// ** Import Assets
import assets from "../assets/assets";

// ** Import Library
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";

const Navbar = () => {
  const scrollToElement = (name) => {
    scroller.scrollTo(name, {
      duration: 600,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <nav className="hidden sm:flex bg-primary text-white py-4 justify-between items-center px-20 fixed w-full top-0 z-50">
      <Link to="/" onClick={() => scrollToElement("hero")}>
        <img src={assets.logo} alt="logo" />
      </Link>

      <ul className="flex items-center gap-8 font-medium ">
        {sideItems.map((item, index) => (
          <li key={index} className="cursor-pointer hidden lg:flex">
            <Link to="/" onClick={() => scrollToElement(item.scrollTo)}>
              {item.name}
            </Link>
          </li>
        ))}

        <Link
          to="/register"
          className="py-[6px] px-8 rounded-3xl bg-white text-primary"
        >
          Register
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
