import analogueWatch from "../assets/analog-watch.jpg";
import digitalWatch from "../assets/digital-watch1.jpg";
import headset from "../assets/headset.jpg";
import gameController from "../assets/game-gear.jpg";
import camera from "../assets/camera.jpg";
import speaker from "../assets/speaker.jpg";

import { LuArrowDownFromLine } from "react-icons/lu";
import { MdWatchLater } from "react-icons/md";

const ProductCard = () => {
  return (
    <div>
      <div className="md:flex md:flex-wrap md:items-center">
        <div className="w-[350px] lg:w-[300px] lg:h-[560px] xl:w-[500px] xl:h-[460px] h-auto dark:bg-slate-900 mx-auto mt-4 p-2">
          <div>
            <div>
              <img
                className="w-28 h-28 mx-auto mb-2"
                src={analogueWatch}
                alt=""
              />
            </div>
            <h3 className="font-semibold inter text-xl lg:text-2xl text-center">
              Analogue Watch
            </h3>
            <p className="inter text-lg: xl:text-xl text-center">
              Analog watches display time using hands that move around a
              circular dial. With no digital components, they offer a classic
              and timeless aesthetic. Often prized for their craftsmanship and
              mechanical precision, analog watches are popular among those who
              appreciate traditional timekeeping.
            </p>
          </div>
          <div className="divider"></div>
          <div className="flex justify-between ">
            <div className="flex gap-3 items-center">
              <MdWatchLater />
              <p>Updated 2 hr ago</p>
            </div>
            <div className="flex gap-3 items-center">
              <LuArrowDownFromLine />
              <p>356 Purchase</p>
            </div>
          </div>
        </div>
        <div className="w-[350px] lg:w-[300px] lg:h-[560px] xl:w-[500px] xl:h-[460px] h-auto dark:bg-slate-900 mx-auto mt-4 p-2">
          <div>
            <div>
              <img
                className="w-28 h-28 mx-auto mb-2"
                src={digitalWatch}
                alt=""
              />
            </div>
            <h3 className="font-semibold inter text-xl lg:text-2xl text-center">
              Digital Watch
            </h3>
            <p className="inter text-lg: xl:text-xl text-center">
              Digital watches display time electronically using numbers and
              segments. They often offer additional features like alarms,
              stopwatches, and timers. Known for their accuracy and
              practicality, digital watches are popular among those who
              prioritize functionality and modern aesthetics.
            </p>
          </div>
          <div className="divider"></div>
          <div className="flex justify-between ">
            <div className="flex gap-3 items-center">
              <MdWatchLater />
              <p>Updated 3 hr ago</p>
            </div>
            <div className="flex gap-3 items-center">
              <LuArrowDownFromLine />
              <p>519 Purchase</p>
            </div>
          </div>
        </div>
        <div className="w-[350px] lg:w-[300px] lg:h-[560px] xl:w-[500px] xl:h-[460px] h-auto dark:bg-slate-900 mx-auto mt-4 p-2">
          <div>
            <div>
              <img className="w-28 h-28 mx-auto mb-2" src={headset} alt="" />
            </div>
            <h3 className="font-semibold inter text-xl lg:text-2xl text-center">
              Headset
            </h3>
            <p className="inter text-lg: xl:text-xl text-center">
              A headset combines headphones and a microphone, allowing users to
              listen and speak simultaneously. They offer hands-free
              communication and are widely used for gaming, call centers, and
              personal communication devices like smartphones. Headsets come in
              wired and wireless varieties, with features like noise
              cancellation and virtual surround sound.
            </p>
          </div>
          <div className="divider"></div>
          <div className="flex justify-between ">
            <div className="flex gap-3 items-center">
              <MdWatchLater />
              <p>Updated 2.5 hr ago</p>
            </div>
            <div className="flex gap-3 items-center">
              <LuArrowDownFromLine />
              <p>412 Purchase</p>
            </div>
          </div>
        </div>
        <div className="w-[350px] lg:w-[300px] lg:h-[560px] xl:w-[500px] xl:h-[460px] h-auto dark:bg-slate-900 mx-auto mt-4 p-2">
          <div>
            <div>
              <img
                className="w-28 h-28 mx-auto mb-2"
                src={gameController}
                alt=""
              />
            </div>
            <h3 className="font-semibold inter text-xl lg:text-2xl text-center">
              Game Controller
            </h3>
            <p className="inter text-lg: xl:text-xl text-center">
              A game controller is a handheld input device used to interact with
              video games. It typically has buttons, joysticks, and directional
              pads for players to control on-screen characters or objects. Game
              controllers come in various designs, from classic to advanced, and
              are compatible with different gaming platforms.
            </p>
          </div>
          <div className="divider"></div>
          <div className="flex justify-between ">
            <div className="flex gap-3 items-center">
              <MdWatchLater />
              <p>Updated 1.5 hr ago</p>
            </div>
            <div className="flex gap-3 items-center">
              <LuArrowDownFromLine />
              <p>320 Purchase</p>
            </div>
          </div>
        </div>
        <div className="w-[350px] lg:w-[300px] lg:h-[560px] xl:w-[500px] xl:h-[460px] h-auto dark:bg-slate-900 mx-auto mt-4 p-2">
          <div>
            <div>
              <img className="w-28 h-28 mx-auto mb-2" src={camera} alt="" />
            </div>
            <h3 className="font-semibold inter text-xl lg:text-2xl text-center">
              Game Controller
            </h3>
            <p className="inter text-lg: xl:text-xl text-center">
              A camera is a device used to capture and record images or videos.
              It works by focusing light through a lens onto a light-sensitive
              sensor or film, creating a representation of the subject. Cameras
              range from simple point-and-shoot models to complex professional
              systems with interchangeable lenses, offering a vast array of
              features and capabilities.
            </p>
          </div>
          <div className="divider"></div>
          <div className="flex justify-between ">
            <div className="flex gap-3 items-center">
              <MdWatchLater />
              <p>Updated 1.5 hr ago</p>
            </div>
            <div className="flex gap-3 items-center">
              <LuArrowDownFromLine />
              <p>320 Purchase</p>
            </div>
          </div>
        </div>
        <div className="w-[350px] lg:w-[300px] lg:h-[560px] xl:w-[500px] xl:h-[460px] h-auto dark:bg-slate-900 mx-auto mt-4 p-2">
          <div>
            <div>
              <img className="w-28 h-28 mx-auto mb-2" src={speaker} alt="" />
            </div>
            <h3 className="font-semibold inter text-xl lg:text-2xl text-center">
              Camera
            </h3>
            <p className="inter text-lg: xl:text-xl text-center">
              A camera is a device used to capture and record images or videos.
              It works by focusing light through a lens onto a light-sensitive
              sensor or film, creating a representation of the subject. Cameras
              range from simple point-and-shoot models to complex professional
              systems with interchangeable lenses, offering a vast array of
              features and capabilities.
            </p>
          </div>
          <div className="divider"></div>
          <div className="flex justify-between ">
            <div className="flex gap-3 items-center">
              <MdWatchLater />
              <p>Updated 1 hr ago</p>
            </div>
            <div className="flex gap-3 items-center">
              <LuArrowDownFromLine />
              <p>588 Purchase</p>
            </div>
          </div>
        </div>
      </div>
      <div className="join my-4 flex justify-center">
        <button className="join-item btn">1</button>
        <button className="join-item btn btn-active">2</button>
        <button className="join-item btn">3</button>
        <button className="join-item btn">4</button>
      </div>
    </div>
  );
};

export default ProductCard;
