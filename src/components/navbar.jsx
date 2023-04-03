import logo from "../assets/breezeLogo.svg";
import arrow from "../assets/downarrow.png";
import login from "../assets/login.svg";

const Navbar = () => {
  return (
    <div className="lg:absolute lg:z-40 lg:flex px-20 md:hidden  lg:w-full ">
      <div className="lg:flex lg:w-5/12 lg:justify-between md:hidden md:w-full    px-4">
        <div>
          <img className="h-40 w-40" src={logo} alt="ERR" />
        </div>
        <div className="flex justify-center items-center">
          <div>
            <p className="text-white opacity-80 font-chakra text-xl">Product</p>
          </div>
          {/* <div className="pl-2">
            <img className="h-3 w-3 " src={arrow} alt="" />
          </div> */}
        </div>
        <div className="flex justify-center items-center">
          <div>
            <p className="text-white opacity-80 font-chakra text-xl">
              Resources
            </p>
          </div>
          {/* <div className="pl-2">
            <img className="h-3 w-3 " src={arrow} alt="" />
          </div> */}
        </div>
        <div className="flex justify-center items-center">
          <p className="text-white opacity-80 font-chakra text-xl">Company</p>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-white opacity-80 font-chakra text-xl">Pricing</p>
        </div>
      </div>
      <div className="lg:flex justify-end lg:w-7/12  lg:items-center">
        <div>
          <img className="w-12 h-12 " src={login} alt="Br" />
        </div>
        <div className="px-16">
          <button className="bg-[#00E7B9] hover:bg-white px-6 p-3 rounded-lg font-sans text-lg text-[#223354] font-semibold ">
            Request Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
