import { CrossIcon, MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="bg-black h-[100px] w-full relative flex items-center justify-center">
      <nav className="max-w-[1400px] w-full bg-black h-full flex  items-center justify-center">
        <div className="z-[2000] relative flex w-full max-w-[1600px] h-full justify-between px-8 items-center text-white bg-black">
          <Link to={"/"} className="cursor-pointer">
            Logo
          </Link>

          <div onClick={() => setToggleMenu((prev) => !prev)} className="cursor-pointer">
            {toggleMenu ? (
              <CrossIcon className="rotate-[45deg]" />
            ) : (
              <MenuIcon />
            )}
          </div>
        </div>
      <ul
        className={`absolute z-[1000] right-0 w-full flex flex-col items-end px-4 bg-black text-purple-300 space-y-4 transition-all duration-500 pt-5 pb-10 ${
          toggleMenu ? "top-[100%]" : "top-[-500%]"
        } `}
        >
        <li className=" hover:text-white">
          <Link to={"/"}>about</Link>
        </li>
        <li className=" hover:text-white">
          <Link to={"/"}>about</Link>
        </li>
        <li className=" hover:text-white">
          <Link to={"/"}>about</Link>
        </li>
        <li className=" hover:text-white">
          <Link to={"/"}>about</Link>
        </li>
        <li className=" hover:text-white">
          <Link to={"/"}>about</Link>
        </li>
      </ul>
          </nav>
    </header>
  );
};

export default Navbar;
