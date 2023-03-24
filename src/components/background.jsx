import banner from "../assets/banner.svg";
import swing from "../assets/swing.png";

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
    </div>
  );
};

export default Background;
