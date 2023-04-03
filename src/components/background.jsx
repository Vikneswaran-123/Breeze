import banner from "../assets/banner.svg";
import swing from "../assets/swing.png";
import logo from "../assets/breezeLogo.svg";
import bg from "../assets/bgimg.png";

const Background = () => {
  return (
    <div className="absolute w-full">
      <div className="w-full ">
        <img
          className="lg:w-full   lg:bg-cover absolute "
          src={banner}
          alt="BACKGORUND"
        />
      </div>
      <div>
        <img className="w-full relative" src={swing} alt="BACKGORUND" />
      </div>
      {/* <div className=" w-full absolute md:pt-[5300px]  sm:pt-[3300px] xl:pt-[1000px]  lg:pt-[2000px] bg-cover"> */}
      <div className=" lg:w-full lg:absolute md:pt-[4600px]  lg:pt-[950px]  lg:bg-cover">
        <div>
          <img
            className="lg:w-[100%] lg:h-[700px] md:w-full md:h-full  "
            src={bg}
            alt="ERR"
          />
        </div>
      </div>
    </div>
  );
};

export default Background;
