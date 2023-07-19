// ** Import Constanst
import { sideItems } from "../constants";

// ** Import Assets
import assets from "../assets/assets";

// ** Import Package
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="hidden md:flex bg-primary text-white py-4 justify-between items-center px-20 fixed w-full top-0 z-50">
      <Link to="/">
        <img src={assets.logo} alt="logo" />
      </Link>

      <ul className="flex items-center gap-8 font-medium ">
        {sideItems.map((item, index) => (
          <li key={index} className="cursor-pointer">
            <a href={item.scrollTo}>{item.name}</a>
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
