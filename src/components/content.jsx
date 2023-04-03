import audit from "../assets/audit.PNG";
import arrow from "../assets/arrow.svg";
import arrowWhite from "../assets/arrowWhite.svg";
import explore from "../assets/workoutline.svg";
import checkCircle from "../assets/checkCircle.svg";
import factCheck from "../assets/factchecks.svg";
import findReplace from "../assets/findreplace.svg";
import artTrack from "../assets/art-track.svg";
import appSettings from "../assets/app-settings.svg";
import save from "../assets/save.svg";
import circleTick from "../assets/circle-tick.svg";
import pageAudit from "../assets/page-audit.svg";
import tick from "../assets/tick.png";
import add from "../assets/add.png";
import workspace from "../assets/WorkBanner.png";
import logo from "../assets/breezeLogo.svg";
import chrome from "../assets/chrome.png";

const Content = () => {
  return (
    <div className="absolute md:w-screen md:p-10 p-24 z-10  w-full">
      <div className="flex  md:flex-col ">
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
          <div className="flex justify-center">
            <div className="w-7/12 pt-32 p-5 justify-center">
              <img className="w-[700px]" src={pageAudit} alt="Err" />
            </div>
            <div className=" w-7/12 justify-center pt-20  p-10">
              <div className=" ">
                <h1 className="text-[#03224f] opacity-90 text-4xl font-chakraBd  text-start  ">
                  Website audit report at your fingertips with Breeze
                </h1>
              </div>
              <div className=" ">
                <h1 className="text-[#03224f] opacity-50 text-xl font-semibold font-chakra text-start pt-5 ">
                  Access the detailed audit report for your webpage and look
                  into pppurtunities application
                </h1>
              </div>
              <div className="flex w-10/12 justify-center pt-2">
                <div className="justify-center items-center flex px-12">
                  <img className=" w-16" src={tick} alt="Err" />
                </div>
                <div>
                  <h1 className="text-[#03224f] opacity-90 text-2xl font-chakraBd  text-start  ">
                    Add your webpage report URL get report in a click
                  </h1>
                  <h1 className="text-[#03224f] opacity-80 text-xl font-semibold font-chakra text-start  ">
                    Add URL of your webpage get the detailed report by clicking
                    on the 'new page audit' button
                  </h1>
                </div>
              </div>
              <div className="flex justify-center pt-8">
                <div className="justify-center items-center flex px-12">
                  <img className="w-16" src={tick} alt="Err" />
                </div>
                <div>
                  <h1 className="text-[#03224f] opacity-90 text-2xl font-chakraBd text-start  ">
                    Get insights into performance, SEO score and overall
                    oppurtunities to improve your webpage
                  </h1>
                  <h1 className="text-[#03224f] opacity-80 text-xl font-semibold font-chakra text-start  ">
                    You get the details of your performance and SEO score plus
                    the oppurtunities where you can improve your webpage results
                  </h1>
                </div>
              </div>
              <div className="flex justify-center pt-8">
                <div className="justify-center items-center flex px-12">
                  <img className="w-16" src={tick} alt="Err" />
                </div>
                <div>
                  <h1 className="text-[#03224f] opacity-90 text-2xl font-chakraBd text-start  ">
                    Save the webpage audit report in Breeze app
                  </h1>
                  <h1 className="text-[#03224f] opacity-80 text-xl font-semibold font-chakra text-start  ">
                    You can save your report of the webpage audit by clicking
                    the 'save' button in the Breeze web application
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-start pt-8">
          <div className="justify-center items-center flex px-6">
            <img className="w-5" src={add} alt="Err" />
          </div>
          <div>
            <h1 className="text-[#03224f] opacity-90 text-2xl font-chakraBd text-start  ">
              Which is the best tool for website audit?
            </h1>
            <h1 className="text-[#03224f] opacity-50 text-xl font-semibold font-chakra text-start  ">
              Breeze is one of the best tool for website audit report. You can
              avail it for free in beginner plan.
            </h1>
          </div>
        </div>
        <hr class="h-px my-8 bg-gray-200 border opacity-60 dark:bg-gray-700"></hr>
        <div className="flex justify-start ">
          <div className="justify-center items-center flex px-6">
            <img className="w-5" src={add} alt="Err" />
          </div>
          <div>
            <h1 className="text-[#03224f] opacity-90 text-2xl font-chakraBd text-start  ">
              What is website audit report?
            </h1>
          </div>
        </div>
        <hr class="h-px my-8 bg-gray-200 border opacity-60 dark:bg-gray-700"></hr>
        <div className="flex justify-start ">
          <div className="justify-center items-center flex px-6">
            <img className="w-5" src={add} alt="Err" />
          </div>
          <div>
            <h1 className="text-[#03224f] opacity-90 text-2xl font-chakraBd text-start  ">
              Can i download webpage audit report?
            </h1>
          </div>
        </div>
      </div>
      <div className="flex pt-20">
        <div className="w-7/12 pt-10 justify-center items-center">
          <h1 className="text-[#03224f] text-5xl font-chakra text-start pt-20 leading-snug">
            Sign up to
          </h1>
          <h1 className="text-[#03224f] text-5xl font-chakraBd text-start  leading-snug">
            Breeze Web App
          </h1>
          <p className="text-[#03224f] opacity-70 text-2xl text-start pt-3  font-chakra leading-snug">
            Some of the features that make breeze one of the best website
            toolkits available today
          </p>
          <div className="flex">
            <div className="mt-10 flex hover:bg-[#050A30]  px-6 rounded-md justify-center p-3 bg-blue-700">
              <img
                className="justify-center items-center px-2 w-8 "
                src={arrowWhite}
                alt=""
              />
              <h1 className="text-[#fff] opacity-90 text-md  font-bold   font-sans ">
                Get Started
              </h1>
            </div>
          </div>
        </div>
        <div className="w-11/12 pl-36 p-5 justify-center">
          <img className="w-[900px]" src={workspace} alt="Err" />
        </div>
      </div>
      <div className="w-full">
        {/* <div className="justify-center items-center md:pt-14 lg:pt-14 xl:pt-60 2xl:pt-96 "> */}
        <div className="justify-center items-center pt-5">
          <img className="h-40 w-48" src={logo} alt="ERR" />
          <hr class="h-px  bg-gray-200 border opacity-30 dark:bg-gray-700"></hr>
        </div>
        <div className="flex w-full justify-between ">
          <div className="justify-start items-center flex  ">
            <h1 className="text-[#fff] opacity-96  pr-60 text-3xl  font-chakra ">
              Features
            </h1>
          </div>

          <div>
            <h1 className="text-[#fff]  opacity-96 text-3xl  p-5 font-chakra ">
              Company
            </h1>
          </div>
          <div className="bg-transparent pl-80 pt-8 justify-center">
            <img className="w-44 " src={chrome} alt="" />
          </div>
        </div>
        <div className="flex  justify-between">
          <div className="flex space-y-3  flex-col ">
            <h1 className="text-[#fff] opacity-70 text-lg flex justify-start   font-chakra">
              Cookie & Cache
            </h1>
            <h1 className="text-[#fff] opacity-70 text-lg flex justify-start    font-chakra">
              Responsive Layout
            </h1>
            <h1 className="text-[#fff] opacity-70 text-lg flex justify-start   font-chakra">
              Take Screenshot
            </h1>
            <h1 className="text-[#fff] opacity-70 text-lg flex justify-start   font-chakra">
              Live Edit
            </h1>
            <h1 className="text-[#fff] opacity-70 text-lg flex justify-start   font-chakra">
              SEO Panel
            </h1>
            <h1 className="text-[#fff] opacity-70 text-lg flex justify-start   font-chakra">
              What is ?
            </h1>
            <h1 className="text-[#fff] opacity-70 text-lg flex justify-start  font-chakra">
              Media
            </h1>
          </div>
          <div className="flex flex-col pl-20  space-y-3 justify-start">
            <h1 className="text-[#fff] opacity-70 text-lg flex justify-start   font-chakra">
              Environment
            </h1>
            <h1 className="text-[#fff] opacity-70 text-lg flex justify-start    font-chakra">
              Browser Support
            </h1>
            <h1 className="text-[#fff] opacity-70 text-lg flex justify-start   font-chakra">
              Tech Stack
            </h1>
            <h1 className="text-[#fff] opacity-70 text-lg flex justify-start   font-chakra">
              Screenshot Audit
            </h1>
            <h1 className="text-[#fff] opacity-70 text-lg flex justify-start   font-chakra">
              Team Sharing
            </h1>
            <h1 className="text-[#fff] opacity-70 text-lg flex justify-start   font-chakra">
              Page Manager
            </h1>
            <h1 className="text-[#fff] opacity-70 text-lg flex justify-start  font-chakra">
              Checklist
            </h1>
          </div>
          <div className="flex flex-col pl-24 space-y-3 justify-start">
            <h1 className="text-[#fff] opacity-70 text-lg flex justify-start   font-chakra">
              About us
            </h1>
            <h1 className="text-[#fff] opacity-70 text-lg flex justify-start    font-chakra">
              Careers
            </h1>
            <h1 className="text-[#fff] opacity-70 text-lg flex justify-start   font-chakra">
              Contact us
            </h1>
            <h1 className="text-[#fff] opacity-70 text-lg flex justify-start   font-chakra">
              Blog
            </h1>
          </div>
          <div className="flex md:flex-col ">
            <h1 className="text-[#fff] md:text-slate-900 md:pl-10  opacity-96 text-xl pl-96 p-5 font-chakra">
              Check out our 9 Reviews
            </h1>
          </div>
        </div>
        <div>
          <hr class="h-px  bg-gray-200 my-6 border opacity-30 dark:bg-gray-700"></hr>
        </div>
        <div>
          <div>
            <h1 className="text-[#fff] opacity-70 text-lg flex justify-start   font-chakra">
              SCube.co
            </h1>
            <div className="felx">
              <div className="pt-5  flex">
                <div className="w-6/12">
                  <p className="text-[#fff] opacity-70 text-lg flex justify-start   font-chakra">
                    SCube.co & SCube Theme is the trading name for SCube Digital
                    Limited
                  </p>
                  <p className="text-[#fff] opacity-70 text-lg flex justify-start   font-chakra">
                    SCube is Trademarked with UK Government
                  </p>
                </div>
                <div className="flex w-6/12 pt-10 justify-evenly">
                  <h1 className="text-[#fff] opacity-70 text-lg flex justify-start   font-chakra">
                    Terms & Policies
                  </h1>
                  <h1 className="text-[#fff] opacity-70 text-lg flex justify-start   font-chakra">
                    Privacy Policy
                  </h1>
                  <h1 className="text-[#fff] opacity-70 text-lg flex justify-start   font-chakra">
                    Certificates
                  </h1>
                  <h1 className="text-[#fff] opacity-70 text-lg flex justify-start   font-chakra">
                    Cookie Policy
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
