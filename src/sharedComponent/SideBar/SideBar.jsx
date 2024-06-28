import { useState } from "react";
import { BiBarChartAlt } from "react-icons/bi";
import { FaBagShopping, FaLock } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosPersonAdd } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { MdAccountCircle, MdCancel, MdPeopleAlt } from "react-icons/md";
import { VscError } from "react-icons/vsc";
import "./SideBar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [show, setShow] = useState(false);
  const handleHamburgerToggle = () => {
    setShow(true);
  };
  const handleCancelToggle = () => {
    setShow(false);
  };
  return (
    <div
      className={
        show
          ? "inter w-3/4 h-[60rem] md:w-2/4 md:h-[80rem] lg:w-[15rem] absolute top-0 lg:static bg-slate-50 shadow-2xl dark:bg-black"
          : "inter w-3/4 h-[50rem] lg:w-[15rem] lg:h-full absolute top-0 sidebar-collapse lg:left-1 dark:bg-black"
      }
    >
      <div>
        <div className="relative">
          {show ? (
            <MdCancel
              onClick={handleCancelToggle}
              className="absolute top-8 w-8 h-8 -right-8 lg:hidden"
            />
          ) : (
            <GiHamburgerMenu
              onClick={handleHamburgerToggle}
              className="absolute -top-3 -right-8 w-8 h-8 lg:hidden"
            />
          )}
        </div>
        <h2 className="my-7 text-2xl lg:text-3xl font-bold pl-2">Growth-Hub</h2>
        <div className=" border-t-2 pt-4 pl-2">
          <Link to={"/"}>
            <div className="flex items-center gap-2 my-4 dark:hover:bg-slate-300 dark:hover:text-black">
              <BiBarChartAlt /> <h3>Dashboard</h3>
            </div>
          </Link>
          <Link to={"/customers"}>
            <div className="flex items-center gap-2 my-4 dark:hover:bg-slate-300 dark:hover:text-black">
              <MdPeopleAlt /> <h3>Customers</h3>
            </div>
          </Link>
          <Link to={"/products"}>
            <div className="flex items-center gap-2 my-4 dark:hover:bg-slate-300 dark:hover:text-black">
              <FaBagShopping /> <h3>Products</h3>
            </div>
          </Link>
          <Link to={"/account"}>
            <div className="flex items-center gap-2 my-4 dark:hover:bg-slate-300 dark:hover:text-black">
              <MdAccountCircle /> <h3>Account</h3>
            </div>
          </Link>
          <Link to={"/settings"}>
            <div className="flex items-center gap-2 my-4 dark:hover:bg-slate-300 dark:hover:text-black">
              <IoSettingsSharp /> <h3>Settings</h3>
            </div>
          </Link>
          <Link to={"/login"}>
            <div className="flex items-center gap-2 my-4 dark:hover:bg-slate-300 dark:hover:text-black">
              <FaLock /> <h3>Login</h3>
            </div>
          </Link>
          <Link to={"/register"}>
            <div className="flex items-center gap-2 my-4 dark:hover:bg-slate-300 dark:hover:text-black">
              <IoIosPersonAdd /> <h3>Register</h3>
            </div>
          </Link>
          <Link to={"/error"}>
            <div className="flex items-center gap-2 my-4 dark:hover:bg-slate-300 dark:hover:text-black">
              <VscError /> <h3>Error</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
