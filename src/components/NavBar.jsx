import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { BsCloudSun } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [activateSidebar, setActivateSidebar] = useState(false);

  return (
    <>
      <div className="w-full h-fit p-4 bg-gradient-to-b from-dark1 from-60% to-dark2 to-90% sticky top-0 box-border">
        <div className="w-11/12 lg:w-4/5 mx-auto h-fit flex justify-between box-border">
          <div className="w-fit flex items-center ">
            <div className="w-fit h-fit bg-transparent">
              <BsCloudSun className="text-text2 text-3xl " />
            </div>
            <h1 className="text-text1 mx-3 text-xl font-sans font-extrabold">
              WeatherIno2.0
            </h1>
          </div>

          <div
            className="lg:hidden my-auto w-fit h-fit cursor-pointer"
            onClick={() => setActivateSidebar((prev) => !prev)}
          >
            {!activateSidebar ? (
              <RiMenu3Fill className="text-text1 text-3xl" />
            ) : (
              <IoClose className="text-text2 text-3xl" />
            )}
          </div>

          <div className="my-auto h-fit gap-10 hidden lg:flex">
            <ul className="flex list-none text-text1 gap-10 text-lg font-semibold my-auto ">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-text2" : "text-text1"
                }
              >
                <li className="cursor-pointer">Home</li>
              </NavLink>
              {/* <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive ? "text-text2" : "text-text1"
                }
              >
                <li className="cursor-pointer">Contact</li>
              </NavLink> */}
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive ? "text-text2" : "text-text1"
                }
              >
                <li className="cursor-pointer">About Us</li>
              </NavLink>
            </ul>

            {/* <div className="w-fit h-full px-3 py-[3px] font-bold text-md text-text1 border-solid border-2 border-btn_yellow  rounded-lg box-border cursor-pointer hover:scale-110 ease-in-out hover:bg-btn_yellow hover:text-[#000] ">
              Gps Search
            </div> */}
          </div>
        </div>
      </div>
      {activateSidebar && (
        <div className="h-[calc(100vh-60px)] w-full bg-[#11001ced] absolute top-[60px] border-solid border-t-4 border-text1">
          <ul className="flex flex-col list-none text-text1 gap-5 text-lg h-full w-full my-10 items-center">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-text2" : "text-text1"
              }
              onClick={() => setActivateSidebar(false)}
            >
              <li className="cursor-pointer">Home</li>
            </NavLink>
            {/* <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive ? "text-text2" : "text-text1"
              }
              onClick={() => setActivateSidebar(false)}
            >
              <li className="cursor-pointer">Contact</li>
            </NavLink> */}
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive ? "text-text2" : "text-text1"
              }
              onClick={() => setActivateSidebar(false)}
            >
              <li className="cursor-pointer">About Us</li>
            </NavLink>
          </ul>
        </div>
      )}
    </>
  );
}

export default NavBar;
