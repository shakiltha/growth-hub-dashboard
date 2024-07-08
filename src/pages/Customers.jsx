import { LuArrowDownFromLine, LuArrowUpFromLine } from "react-icons/lu";
import NavBar from "../sharedComponent/NavBar";
import SideBar from "../sharedComponent/SideBar/SideBar";
import { IoIosSearch } from "react-icons/io";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Customers = () => {
  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="lg:flex lg:justify-between lg:items-center my-4 ml-2 mr-2 lg:ml-[2rem] xl:ml-[21rem]">
        <h3 className="inter font-bold">Customers</h3>
        <section className="flex justify-center">
          <button className="btn flex items-center gap-1 mr-2">
            <LuArrowUpFromLine /> Import
          </button>
          <button className="btn flex items-center gap-1 mr-2">
            <LuArrowDownFromLine /> Export
          </button>
          <button className="btn btn-active btn-primary">Add Customers</button>
        </section>
      </div>

      <div className="dark:bg-[#121212] p-4 relative h-20 lg:ml-[2rem] xl:ml-[21rem]">
        <label
          className="absolute top-1 z-20 bg-white dark:bg-[#121212] ml-2 px-2"
          htmlFor="search customer"
        >
          Search customer
        </label>
        <IoIosSearch className="absolute z-30 top-7 left-5 w-5 h-5" />
        <input
          type="text"
          name=""
          className="absolute z-10 border rounded py-2 pl-6 pr-4 w-72"
          id=""
        />
      </div>
      <div className="my-4 mx-2 lg:ml-[2rem] xl:ml-[21rem]">
        <h3 className="inter font-semibold text-lg lg:text-2xl">
          Latest Orders
        </h3>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="uppercase">
                <th>Name</th>
                <th>Email</th>
                <th className="flex items-center gap-1">
                  <LuArrowDownFromLine /> Location
                </th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Ethan</div>
                    </div>
                  </div>
                </td>
                <td>ethan@gmail.com</td>
                <td>Tokyo, japan</td>
                <td>+234 3445 467</td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Brice Swyre</div>
                    </div>
                  </div>
                </td>
                <td>brice@gmail.com</td>
                <td>Paris, france</td>
                <td>+909 23 24</td>
              </tr>
              {/* row 3 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/tailwind-css-component-profile-4@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Marjy Ferencz</div>
                    </div>
                  </div>
                </td>
                <td>marjy@gmail.com</td>
                <td>Sydney, australia</td>
                <td>+092 834 29</td>
              </tr>
              {/* row 4 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/tailwind-css-component-profile-5@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Yancy Tear</div>
                    </div>
                  </div>
                </td>
                <td>yancy@gmail.com</td>
                <td>NewYork, united states</td>
                <td>+092 804 239</td>
              </tr>
              {/* row 5 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/tailwind-css-component-profile-4@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Marjy Ferencz</div>
                    </div>
                  </div>
                </td>
                <td>marjy@gmail.com</td>
                <td>Sydney, australia</td>
                <td>+092 834 29</td>
              </tr>
              {/* row 6 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/tailwind-css-component-profile-5@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Yancy Tear</div>
                    </div>
                  </div>
                </td>
                <td>yancy@gmail.com</td>
                <td>NewYork, united states</td>
                <td>+092 804 239</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex items-center justify-end">
        <div className="flex items-center">
          Rows per page:{" "}
          <select className="select max-w-xs mx-2">
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
            <option>50</option>
          </select>
        </div>
        <p className="mx-3">1-5 of 26</p>
        <div className="flex gap-5 mx-3">
          <FaAngleLeft className="cursor-pointer" />
          <FaAngleRight className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Customers;
