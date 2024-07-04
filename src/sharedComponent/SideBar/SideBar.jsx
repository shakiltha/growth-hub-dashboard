import { BiBarChartAlt } from "react-icons/bi";
import { FaBagShopping, FaLock } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosPersonAdd } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { MdAccountCircle, MdPeopleAlt } from "react-icons/md";
import { VscError } from "react-icons/vsc";
import "./SideBar.css";
import { NavLink } from "react-router-dom";

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
              <NavLink
                to={"/"}
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive
                      ? "rgba(255, 255, 255, 0.08)"
                      : "",
                    borderRadius: isActive ? "10px" : "",
                    paddingLeft: isActive ? "8px" : "",
                  };
                }}
              >
                <div className="flex items-center gap-2 my-4">
                  <BiBarChartAlt /> <h3>Dashboard</h3>
                </div>
              </NavLink>
              <NavLink
                to={"/customers"}
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive
                      ? "rgba(255, 255, 255, 0.08)"
                      : "",
                    borderRadius: isActive ? "10px" : "",
                    paddingLeft: isActive ? "8px" : "",
                  };
                }}
              >
                <div className="flex items-center gap-2 my-4">
                  <MdPeopleAlt /> <h3>Customers</h3>
                </div>
              </NavLink>
              <NavLink
                to={"/products"}
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive
                      ? "rgba(255, 255, 255, 0.08)"
                      : "",
                    borderRadius: isActive ? "10px" : "",
                    paddingLeft: isActive ? "8px" : "",
                  };
                }}
              >
                <div className="flex items-center gap-2 my-4 ">
                  <FaBagShopping /> <h3>Products</h3>
                </div>
              </NavLink>
              <NavLink
                to={"/account"}
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive
                      ? "rgba(255, 255, 255, 0.08)"
                      : "",
                    borderRadius: isActive ? "10px" : "",
                    paddingLeft: isActive ? "8px" : "",
                  };
                }}
              >
                <div className="flex items-center gap-2 my-4 ">
                  <MdAccountCircle /> <h3>Account</h3>
                </div>
              </NavLink>
              <NavLink
                to={"/settings"}
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive
                      ? "rgba(255, 255, 255, 0.08)"
                      : "",
                    borderRadius: isActive ? "10px" : "",
                    paddingLeft: isActive ? "8px" : "",
                  };
                }}
              >
                <div className="flex items-center gap-2 my-4 ">
                  <IoSettingsSharp /> <h3>Settings</h3>
                </div>
              </NavLink>
              <NavLink
                to={"/login"}
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive
                      ? "rgba(255, 255, 255, 0.08)"
                      : "",
                    borderRadius: isActive ? "10px" : "",
                    paddingLeft: isActive ? "8px" : "",
                  };
                }}
              >
                <div className="flex items-center gap-2 my-4 ">
                  <FaLock /> <h3>Login</h3>
                </div>
              </NavLink>
              <NavLink
                to={"/register"}
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive
                      ? "rgba(255, 255, 255, 0.08)"
                      : "",
                    borderRadius: isActive ? "10px" : "",
                    paddingLeft: isActive ? "8px" : "",
                  };
                }}
              >
                <div className="flex items-center gap-2 my-4 ">
                  <IoIosPersonAdd /> <h3>Register</h3>
                </div>
              </NavLink>
              <NavLink
                to={"/error"}
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive
                      ? "rgba(255, 255, 255, 0.08)"
                      : "",
                    borderRadius: isActive ? "10px" : "",
                    paddingLeft: isActive ? "8px" : "",
                  };
                }}
              >
                <div className="flex items-center gap-2 my-4 ">
                  <VscError /> <h3>Error</h3>
                </div>
              </NavLink>
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
