import { IoIosNotifications, IoMdPeople } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-xl lg:sticky lg:top-0 z-30">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl ml-10 lg:ml-[3rem] xl:ml-[19rem]">
          <IoSearchOutline />
        </a>
      </div>
      <div className="flex-none">
        <div className="mr-2">
          <IoMdPeople className="w-6 h-6" />
        </div>
        <div className="mr-2">
          <IoIosNotifications className="w-6 h-6" />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
