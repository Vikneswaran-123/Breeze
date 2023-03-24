import audit from"../assets/audit.PNG"
import arrow from "../assets/arrow.svg"
import explore from "../assets/workoutline.svg"




const Content = () => {
  return (
    <div className="absolute z-10 p-24 w-full flex">
      <div className="w-6/12 ">
        <h1 className="text-white text-5xl font-chakra text-start pt-20 leading-snug">Get website audit report in a click with Breeze application</h1>
       <p className="text-white opacity-80 text-3xl text-start pt-3  font-chakra leading-snug"> Breeze avails you detailed audit behind website pages within few steps.</p>
       <div>
        <div className=" flex w-64 rounded-md justify-center p-2 bg-[#00E7B9]">
       
         <img className="justify-center items-center px-2 w-9 " src={arrow} alt="" />
         <h1 className="text-[#043783] opacity-80 text-md  font-bold   font-sans ">Get a Free Workspace</h1>
        </div>
       </div>
      </div>
      <div className="w-6/12 pl-36 p-20 justify-center">
        <img className="shadow-2xl" src={audit} alt="Err" />
        <p className="text-white opacity-60 text-xl text-center  pt-3 font-chakra leading-snug">
          Breeze is the free website audit toolthat provides w
          ebsite audit reports for you in click
        </p>
      </div>
    </div>
  );
};

export default Content;
