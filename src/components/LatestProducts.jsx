import headset from "../assets/headset.jpg";
import digitalWatch from "../assets/digital-watch1.jpg";
import analogueWatch from "../assets/analog-watch.jpg";
import gameController from "../assets/game-gear.jpg";
import camera from "../assets/camera.jpg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdArrowDropright } from "react-icons/io";

const LatestProducts = () => {
  return (
    <div className="mt-6 p-2 m-2 rounded-lg dark:bg-[#0F172A]">
      <div>
        <h3 className="inter text-xl lg:text-2xl font-bold pb-2">
          Latest Products
        </h3>
        <div className="divider"></div>
        <div>
          <section className="my-2 flex  justify-between p-2">
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10">
                <img src={headset} alt="" />
              </div>
              <div>
                <p className="inter">Headset</p>
                <p className="inter text-sm opacity-80">Updated 2 hours ago</p>
              </div>
            </div>
            <div>
              <BsThreeDotsVertical className="cursor-pointer" />
            </div>
          </section>
          <div className="divider"></div>
          <section className="my-2 flex  justify-between p-2">
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10">
                <img src={digitalWatch} alt="" />
              </div>
              <div>
                <p className="inter">Digital Watch</p>
                <p className="inter text-sm opacity-80">Updated 1 hours ago</p>
              </div>
            </div>
            <div>
              <BsThreeDotsVertical className="cursor-pointer" />
            </div>
          </section>
          <div className="divider"></div>
          <section className="my-2 flex  justify-between p-2">
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10">
                <img src={analogueWatch} alt="" />
              </div>
              <div>
                <p className="inter">Analogue watch</p>
                <p className="inter text-sm opacity-80">Updated 4 hours ago</p>
              </div>
            </div>
            <div>
              <BsThreeDotsVertical className="cursor-pointer" />
            </div>
          </section>
          <div className="divider"></div>
          <section className="my-2 flex  justify-between p-2">
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10">
                <img src={gameController} alt="" />
              </div>
              <div>
                <p className="inter">Game Controller</p>
                <p className="inter text-sm opacity-80">Updated 2 hours ago</p>
              </div>
            </div>
            <div>
              <BsThreeDotsVertical className="cursor-pointer" />
            </div>
          </section>
          <div className="divider"></div>
          <section className="my-2 flex  justify-between p-2">
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10">
                <img src={camera} alt="" />
              </div>
              <div>
                <p className="inter">Camera</p>
                <p className="inter text-sm opacity-80">Updated 5 hours ago</p>
              </div>
            </div>
            <div>
              <BsThreeDotsVertical className="cursor-pointer" />
            </div>
          </section>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex justify-end">
        <button className="btn">
          View all <IoMdArrowDropright />{" "}
        </button>
      </div>
    </div>
  );
};

export default LatestProducts;
