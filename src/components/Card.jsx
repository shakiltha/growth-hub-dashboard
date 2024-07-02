import { IoMdArrowDropdown } from "react-icons/io";

const Card = ({ budget, money, img, percent }) => {
  return (
    <div className="mx-auto w-[334px] h-[178px] lg:w-[300px] xl:w-[334px] my-4 py-8 px-6 dark:bg-slate-900 rounded-xl shadow-xl inter">
      <div className="flex justify-between">
        <div>
          <h5 className="text-sm uppercase">{budget}</h5>
          <h3 className="text-3xl font-bold my-4 ">{money}</h3>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
      <p className="flex items-center gap-5 mt-2 ">
        <IoMdArrowDropdown /> {percent}
      </p>
    </div>
  );
};

export default Card;
