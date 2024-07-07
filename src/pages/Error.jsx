import { Link } from "react-router-dom";
import errorImg from "../assets/Frame.png";
import { FaArrowLeftLong } from "react-icons/fa6";

const Error = () => {
  return (
    <div className="flex justify-center items-center flex-col mx-2">
      <h2 className="inter font-semibold text-xl lg:text-2xl">
        404: The page you are looking for isn’t here
      </h2>
      <p className="inter">
        You either tried some shady route or you came here by mistake. Whichever
        it is, try using the navigation
      </p>
      <img src={errorImg} className="mt-14" alt="" />
      <Link to={"/dashboard"} className="my-4">
        <button className="btn bg-[#5048E5]">
          <FaArrowLeftLong /> Go back to Dashboard
        </button>
      </Link>
    </div>
  );
};

export default Error;
