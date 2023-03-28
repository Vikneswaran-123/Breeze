import banner from "../assets/banner.svg";
import swing from "../assets/swing.png";
import logo from "../assets/breezeLogo.svg";
import bg from "../assets/BGimg.png";

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
      {/* <div className=" w-full  bg-cover">
      <div>
          <img className="w-[100%] h-96 bottom-fixed" src={bg} alt="ERR" />
        </div>
      </div> */}
    </div>
  );
};

export default Background;
