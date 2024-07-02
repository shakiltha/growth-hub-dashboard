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
  return (
    <div>
      <div className="fixed top-2 z-50 lg:top-0 left-1">
        <div className="drawer lg:drawer-open z-40">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              <GiHamburgerMenu />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <h2 className="my-7 text-2xl lg:text-3xl font-bold pl-2 pb-8 border-b-2">
                Growth-Hub
              </h2>
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
            </ul>
          </div>
        </div>
        <div></div>
        {/* 
        <div className=" border-t-2 pt-4 pl-2">
          

        </div>
      </div> */}
      </div>
    </div>
  );
};

export default SideBar;
