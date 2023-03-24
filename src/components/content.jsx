import audit from "../assets/audit.PNG";
import arrow from "../assets/arrow.svg";
import explore from "../assets/workoutline.svg";
import checkCircle from "../assets/checkCircle.svg";
import factCheck from "../assets/factchecks.svg";
import findReplace from "../assets/findreplace.svg";
import artTrack from "../assets/art-track.svg";
import appSettings from "../assets/app-settings.svg";
import save from "../assets/save.svg";
import circleTick from "../assets/circle-tick.svg";
import pageAudit from "../assets/page-audit.svg";

const Content = () => {
  return (
    <div className="absolute z-10 p-24 w-full">
      <div className=" flex">
        <div className="w-6/12 ">
          <h1 className="text-white text-5xl font-chakra text-start pt-20 leading-snug">
            Get website audit report in a click with Breeze application
          </h1>
          <p className="text-white opacity-80 text-3xl text-start pt-3  font-chakra leading-snug">
            Breeze avails you detailed audit behind website pages within few
            steps.
          </p>
          <div className="flex">
            <div className="mt-10 flex hover:bg-[#050A30]   rounded-md justify-center p-2 bg-[#00E7B9]">
              <img
                className="justify-center items-center px-2 w-8 "
                src={arrow}
                alt=""
              />
              <h1 className="text-[#043783] hover:text-white opacity-80 text-md  font-bold   font-sans ">
                Get a Free Workspace
              </h1>
            </div>
            <div className="mt-10 flex ml-5 hover:bg-[#050A30] rounded-md justify-center p-2 bg-[#1A068A]">
              <img
                className="justify-center items-center px-2 w-10 "
                src={explore}
                alt=""
              />
              <h1 className="text-white opacity-80 text-md  font-bold  font-sans ">
                Explore Breeze
              </h1>
            </div>
          </div>
        </div>
        <div className="w-6/12 pl-36 p-20 justify-center">
          <img className="shadow-2xl" src={audit} alt="Err" />
          <p className="text-white opacity-60 text-xl text-center  pt-3 font-chakra leading-snug">
            Breeze is the free website audit toolthat provides w ebsite audit
            reports for you in click
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-center ">
          <h1 className="text-[#03224f] opacity-90 text-5xl font-chakra text-start pt-32 ">
            See how a webpage is performing in the Breeze web application
          </h1>
        </div>
        <div className="flex justify-center ">
          <h1 className="text-[#03224f] opacity-70 text-xl font-medium  font-chakra text-start pt-5 ">
            Breeze assess the overall performance, SEO score,and issues in the
            webpage
          </h1>
        </div>
        <div className="grid grid-cols-3  pt-10 gap-9 justify-around">
          <div className="bg-white rounded-xl grid justify-items-center  shadow-xl">
            <img className="pt-10" src={checkCircle} alt="er" />
            <h1 className="text-[#03224f] opacity-80 text-base font-bold font-sans  pt-3">
              Check Performance
            </h1>
            <p className="text-[#03224f] opacity-50 text-lg text-center px-10 font-semibold pt-2 pb-10 font-chakra   ">
              It predicts an Overall Performance score of webpage
            </p>
          </div>
          <div className="bg-white rounded-xl grid justify-items-center  shadow-xl">
            <img className="pt-10" src={factCheck} alt="er" />
            <h1 className="text-[#03224f] opacity-80 text-base font-bold font-sans  pt-3">
              Check Accessibility
            </h1>
            <p className="text-[#03224f] opacity-50 text-lg text-center px-10 font-semibold pt-2 pb-10 font-chakra   ">
              Accessibility checks the oppurtunities to improve accessibility of
              your webpage
            </p>
          </div>
          <div className="bg-white rounded-xl grid justify-items-center  shadow-xl">
            <img className="pt-10" src={findReplace} alt="er" />
            <h1 className="text-[#03224f] opacity-80 text-base font-bold font-sans  pt-3">
              Find Out Best Practices
            </h1>
            <p className="text-[#03224f] opacity-50 text-lg text-center px-10 font-semibold pt-2 pb-10 font-chakra">
              Best Practices tells you the moral practices to follow for a
              webpage on the internet
            </p>
          </div>
          <div className="bg-white rounded-xl grid justify-items-center  shadow-xl">
            <img className="pt-10" src={artTrack} alt="er" />
            <h1 className="text-[#03224f] opacity-80 text-base font-bold font-sans  pt-3">
              Keep Track of SEO score
            </h1>
            <p className="text-[#03224f] opacity-50 text-lg text-center px-10 font-semibold pt-2 pb-10 font-chakra">
              SEO checks ensure that your page is following basic search engine
              optimization advice
            </p>
          </div>
          <div className="bg-white rounded-xl grid justify-items-center  shadow-xl">
            <img className="pt-10" src={appSettings} alt="er" />
            <h1 className="text-[#03224f] opacity-80 text-base font-bold font-sans  pt-3">
              Know PWA
            </h1>
            <p className="text-[#03224f] opacity-50 text-lg text-center px-10 font-semibold pt-2 pb-10 font-chakra">
              PWA check validate the aspects of progressive of a web app
            </p>
          </div>
          <div className="bg-white rounded-xl grid justify-items-center  shadow-xl">
            <img className="pt-10" src={save} alt="er" />
            <h1 className="text-[#03224f] opacity-80 text-base font-bold font-sans  pt-3">
              Save the Report
            </h1>
            <p className="text-[#03224f] opacity-50 text-lg text-center px-10 font-semibold pt-2 pb-10 font-chakra">
              You can save the report on the Breeze web application to follow
              through later
            </p>
          </div>
        </div>
      </div>
      <div className="pt-16 ">
        <div className="image flex justify-between rounded-2xl">
          <div className="RS p-12 ">
            <div className="text-white text-4xl text-start font-bold font-chakra  pt-3">
              <h1> Start managing your websites</h1>
            </div>
            <div className="text-white opacity-50 text-xl text-start pt-7  font-chakra leading-snug">
              <p>
                The first comphrehensive tool developer for Website Managers.
              </p>
              <p>Everything you needed in one place</p>
            </div>
            <div className="flex">
              <div className="mt-8 flex hover:bg-[#050A30] px-4  rounded-md justify-center p-2 bg-[#00E7B9]">
                <img
                  className="justify-center items-center px-2 w-8 "
                  src={arrow}
                  alt=""
                />
                <h1 className="text-[#043783] hover:text-white hover:opacity-100 opacity-80 text-md  font-bold   font-sans ">
                  Get Started Free
                </h1>
              </div>
              <div className="mt-8 flex ml-5 hover:bg-[#050A30] rounded-md justify-center border  p-2 bg-[#1A068A]">
                <h1 className="text-white  text-md px-4 font-semibold font-sans ">
                  Signup with google
                </h1>
              </div>
            </div>
            <div className="text-white opacity-50 text-xl text-start pt-9 font-chakra leading-snug">
              <p>No credit card required</p>
            </div>
          </div>
          <div className="LS flex flex-col pr-10 justify-evenly py-10">
            <div className="bg-[#040720] flex  items-center p-4 pr-36 rounded-xl">
              <img className="flex justify-start" src={circleTick} alt="ar" />
              <h1 className="text-white  text-md px-4 font-semibold font-sans">
                Freelancer: £0/Free
              </h1>
            </div>
            <div className="bg-[#040720] flex  items-center p-4 pr-36 rounded-xl">
              <img className="flex justify-start" src={circleTick} alt="ar" />
              <h1 className="text-white  text-md px-4 font-semibold font-sans">
                Starter: £150 pm/£1800 pa
              </h1>
            </div>
            <div className="bg-[#040720] flex  items-center p-4  pr-36 rounded-xl">
              <img className="flex justify-start" src={circleTick} alt="ar" />
              <h1 className="text-white  text-md px-4 font-semibold font-sans">
                pro:£500 pm/£6000 pa
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="flex justify-center ">
            <h1 className="text-[#03224f] opacity-90 text-5xl font-chakra text-start pt-32 ">
              Breeze is the best website audit tools you can find
            </h1>
          </div>
          <div className="flex justify-center ">
            <h1 className="text-[#03224f] opacity-70 text-xl font-medium  font-chakra text-start pt-5 ">
              A glimpse of 'Page Audit' feature inside the Breeze web
              application
            </h1>
          </div>

          <div className="w-7/12  p-20 justify-center">
            <img className="w-[600px]" src={pageAudit} alt="Err" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
