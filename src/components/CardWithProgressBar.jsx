import img from "../assets/Avatar-3.png";
const CardWithProgressBar = () => {
  return (
    <div className="mx-auto w-[334px] lg:w-[300px] xl:w-[334px] h-[178px] my-4 py-8 px-6 dark:bg-slate-900 rounded-xl shadow-xl inter">
      <div className="flex justify-between">
        <div>
          <h5 className="text-sm uppercase">total progress</h5>
          <h3 className="text-3xl font-bold my-4">75.5%</h3>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
      <progress
        className="progress progress-primary w-56"
        value="75.5"
        max="100"
      ></progress>
    </div>
  );
};

export default CardWithProgressBar;
