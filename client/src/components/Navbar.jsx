import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useStateContext } from "../context";
import { CustomButton } from "./";
import { logo, menu, search, thirdweb, sun, logo2 } from "../assets";
import { navlinks } from "../constants";

import Style from "../styles/NavBar.module.css";

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px] ${
      isActive && isActive === name
    } flex justify-center items-center ${
      !disabled && "cursor-pointer"
    } ${styles}`}
    onClick={handleClick}
  >
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" />
    ) : (
      <img
        src={imgUrl}
        alt="fund_logo"
        className={`${isActive !== name && "grayscale"}`}
      />
    )}
  </div>
);

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { connect, address } = useStateContext();

  return (
    <div className=" flex min-[925px]:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <Link className="max-[925px]:hidden" to="/">
        <Icon styles="w-[52px] h-[52px] bg-[#FAFAFA]" imgUrl={logo2} />
      </Link>

      <div
        className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] rounded-[100px]"
        style={{ border: "1px solid grey" }}
      >
        <input
          type="text"
          placeholder="Qaiyrymdylyq kampanialaryn ızdeu"
          className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none"
        />

        <div
          className="w-[72px] h-full rounded-[20px] bg-[#33364f] flex justify-center items-center cursor-pointer"
          style={{
            boxShadow: "0px 2px 7px grey",
          }}
        >
          <img
            src={search}
            alt="search"
            className="w-[15px] h-[15px] object-contain"
          />
        </div>
      </div>

      <div
        className="hidden min-[925px]:flex flex-1 flex justify-between items-center bg-[#F8F9F6] rounded-[20px] w-[76px] border-blue-500"
        style={{ border: "1px solid grey" }}
      >
        <div className="flex justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>
        <Icon styles=" shadow-secondary" imgUrl={sun} />
      </div>

      <div className="min-[925px]:flex hidden flex-row justify-end gap-4">
        <CustomButton
          btnType="button"
          title={address ? "Qaiyrymdylyq kampaniasyn qūru" : "Ämiandı qosu"}
          styles={address ? "bg-[#33364f]" : "bg-[#1dc071]"}
          style={{
            boxShadow: "0px 2px px grey",
          }}
          handleClick={() => {
            if (address) navigate("create-campaign");
            else connect();
          }}
        />
      </div>

      {/* Small screen navigation */}
      <div className="min-[925px]:hidden flex justify-between items-center relative">
        <div className="w-[40px] h-[40px] rounded-[10px] flex justify-center items-center cursor-pointer">
          <img src={logo2} alt="user" className="object-contain" />
        </div>

        <img
          src={menu}
          alt="menu"
          className="w-[34px] h-[34px] object-contain cursor-pointer"
          onClick={() => setToggleDrawer((prev) => !prev)}
        />

        <div
          className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${
            !toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
          } transition-all duration-700`}
        >
          <ul className="mb-4">
            {navlinks.map((link) => (
              <li
                key={link.name}
                className={`flex p-4 ${
                  isActive === link.name && "bg-[#3a3a43]"
                }`}
                onClick={() => {
                  setIsActive(link.name);
                  setToggleDrawer(false);
                  navigate(link.link);
                }}
              >
                <img
                  src={link.imgUrl}
                  alt={link.name}
                  className={`w-[24px] h-[24px] object-contain ${
                    isActive === link.name ? "grayscale-0" : "grayscale"
                  }`}
                />
                <p
                  className={`ml-[20px] font-epilogue font-semibold text-[14px] ${
                    isActive === link.name ? "text-[#1dc071]" : "text-white"
                  }`}
                >
                  {link.name}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex mx-4">
            <CustomButton
              btnType="button"
              title={address ? "Qaiyrymdylyq kampaniasyn qūru" : "Ämiandı qosu"}
              styles={address ? "bg-[#33364f]" : "bg-[#1dc071]"}
              handleClick={() => {
                if (address) navigate("create-campaign");
                else connect();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
