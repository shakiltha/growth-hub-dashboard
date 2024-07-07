import NavBar from "../sharedComponent/NavBar";
import SideBar from "../sharedComponent/SideBar/SideBar";

const Settings = () => {
  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="m-2 p-2 dark:bg-[#121212] shadow-2xl rounded-xl mt-5 xl:ml-96">
        <div className=" mt-4">
          <h3 className="inter font-semibold text-xl lg:text-2xl">
            Notifications
          </h3>
          <p className="inter opacity-95">Manage the notification</p>
          <div className="divider"></div>
        </div>
        <div className="lg:flex lg:gap-5">
          <div>
            <h3 className="inter font-semibold text-xl lg:text-2xl my-2">
              Notifications
            </h3>
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="" id="" checked />
              <label htmlFor="Email">Email</label>
            </div>
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="" id="" checked />
              <label htmlFor="Push Notifications">Push Notifications</label>
            </div>
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="" id="" />
              <label htmlFor="Text Messages">Text Messages</label>
            </div>
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="" id="" />
              <label htmlFor="Phone Calls">Phone Calls</label>
            </div>
          </div>
          <div>
            <h3 className="inter font-semibold text-xl lg:text-2xl my-2">
              Messages
            </h3>
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="" id="" />
              <label htmlFor="Email">Email</label>
            </div>
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="" id="" />
              <label htmlFor="Push Notifications">Push Notifications</label>
            </div>
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="" id="" />
              <label htmlFor="Phone Calls">Phone Calls</label>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="text-right m-2">
          <button className="bg-[#5048E5] py-2 px-5 rounded-3xl">Save</button>
        </div>
      </div>
      <div className="bg-[#121212] mx-2 my-4 p-2 shadow-2xl rounded-xl xl:ml-96">
        <h3 className="inter text-xl lg:text-2xl font-semibold">Password</h3>
        <p className="inter opacity-95">Update password</p>
        <div className="divider"></div>
        <input
          type="password"
          className="border p-2 w-3/4"
          placeholder="Password"
          name=""
          id=""
        />
        <input
          type="password"
          className="border my-2 p-2 w-3/4"
          placeholder="Confirm Password"
          name=""
          id=""
        />
        <div className="text-right m-2">
          <button className="bg-[#5048E5] py-2 px-5 rounded-3xl">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
