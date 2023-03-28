import banner from "../assets/banner.svg";
import swing from "../assets/swing.png";
import logo from "../assets/breezeLogo.svg";
import bg from "../assets/bgimg.png";

const Background = () => {
  return (
    <div className="absolute w-full">
      <div className="w-full">
        <img
          className="w-full bg-cover absolute "
          src={banner}
          alt="BACKGORUND"
        />
      </div>
      <div>
        <img className="w-full relative" src={swing} alt="BACKGORUND" />
      </div>
      {/* <div className=" w-full absolute md:pt-[5300px]  sm:pt-[3300px] xl:pt-[1000px]  lg:pt-[2000px] bg-cover"> */}
      <div className=" w-full absolute pt-[1300px]  bg-cover">
        <div>
          <img className="w-[100%] h-[700px]  " src={bg} alt="ERR" />
        </div>
      </div>
    </div>
  );
};

export default Background;
