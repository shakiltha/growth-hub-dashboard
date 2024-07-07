import { FaAngleLeft, FaAngleRight, FaArrowDownLong } from "react-icons/fa6";

const LatestOrders = () => {
  return (
    <div className="dark:bg-[#0F172A] m-2 p-2 rounded-lg lg:w-2/4 xl:w-3/4">
      <h3 className="inter text-xl lg:text-2xl font-bold pb-2">
        Latest Orders
      </h3>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="uppercase">
                <th>order ref</th>
                <th>customer</th>
                <th className="flex items-center gap-1">
                  <FaArrowDownLong /> date
                </th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th className="uppercase">cdd1049</th>
                <td>Cy Ganderton</td>
                <td>07/04/2024</td>
                <td>
                  <span className="uppercase bg-[#FFB020] rounded-full py-1 px-3 text-white">
                    pending
                  </span>
                </td>
              </tr>
              {/* row 2 */}
              <tr className="hover">
                <th className="uppercase">cdd1048</th>
                <td>Hart Hagerty</td>
                <td>06/04/2024</td>
                <td>
                  <span className="uppercase bg-[#14B8A6] rounded-full py-1 px-2 text-white">
                    delivered
                  </span>
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <th className="uppercase">cdd1047</th>
                <td>Brice Swyre</td>
                <td>05/04/2024</td>
                <td>
                  <span className="uppercase bg-[#D14343] rounded-full py-1 px-2 text-white">
                    refunded
                  </span>
                </td>
              </tr>
              {/* row 4 */}
              <tr>
                <th className="uppercase">cdd1046</th>
                <td>Brice Swyre</td>
                <td>04/04/2024</td>
                <td>
                  <span className="uppercase bg-[#FFB020] rounded-full py-1 px-3 text-white">
                    pending
                  </span>
                </td>
              </tr>
              {/* row 5 */}
              <tr>
                <th className="uppercase">cdd1045</th>
                <td>Brice Swyre</td>
                <td>03/04/2024</td>
                <td>
                  <span className="uppercase bg-[#14B8A6] rounded-full py-1 px-2 text-white">
                    delivered
                  </span>
                </td>
              </tr>
              {/* row 6 */}
              <tr>
                <th className="uppercase">cdd1044</th>
                <td>Brice Swyre</td>
                <td>02/04/2024</td>
                <td>
                  <span className="uppercase bg-[#14B8A6] rounded-full py-1 px-2 text-white">
                    delivered
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
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
    </div>
  );
};

export default LatestOrders;
