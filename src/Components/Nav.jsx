import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import logo_light from "../assets/logo_light.svg";
import logout from "../assets/logout.svg";
import profile from "../assets/profile.svg";

function Nav() {
  const location = window.location.pathname;

  const [user, setUser] = useState({});

  useEffect(() => {
    localStorage.getItem("user") &&
      setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-gray_light border-b border-gray-200 px-7 ">
        <div className="px-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <Link to={"/dashboard"} className="flex items-center justify-center ms-2 md:me-24 bg-">
                <img
                  src={logo_light}
                  className="h-14 me-3 rounded-full m-2"
                  alt="FlowBite Logo"
                />
                <span className=" text-blue_dark self-center text-3xl font-semibold whitespace-nowrap te">
                  {location === "/dashboard" ? "Dashboard" : "FlowBite"}
                </span>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex items-center ms-3">
                <div>
                  <ul className="font-medium flex border mx-20 md:mx-0 space-x-8 ">
                    <li className="flex justify-center items-center h-[30px]">
                      <Link className="hover:scale-110 flex flex-row items-center gap-2" to={"#"}>
                        <span className="text-blue_dark text-md my-4">{user?.username}</span>
                        <img className="h-[15px]" src={profile} alt="logout" />
                      </Link>
                    </li>
                    <li className="flex justify-center items-center h-[30px]">
                      <Link
                        href="#"
                        className="hover:scale-110"
                        aria-current="page"
                      >
                        <img className="h-[25px]" src={logout} alt="logout" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
