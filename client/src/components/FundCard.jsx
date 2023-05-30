import React from "react";

import { tagType, thirdweb, logo2 } from "../assets";
import { daysLeft } from "../utils";

const FundCard = ({
  owner,
  title,
  description,
  target,
  deadline,
  amountCollected,
  image,
  handleClick,
}) => {
  const remainingDays = daysLeft(deadline);

  return (
    <div
      className="sm:w-[288px] w-full rounded-[15px] bg-[#33364F] cursor-pointer"
      onClick={handleClick}
      style={{
        boxShadow: "0px 7px 25px grey",
      }}
    >
      <img
        src={image}
        alt="fund"
        className="w-full h-[158px] object-cover rounded-[15px]"
      />

      <div className="flex flex-col p-4">
        <div className="flex flex-row items-center mb-[18px]">
          <img
            src={tagType}
            alt="tag"
            className="w-[17px] h-[17px] object-contain"
          />
          <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-white">
            Qarajat jinau qaiyrymdylyq kampaniasy
          </p>
        </div>

        <div className="block">
          <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">
            {title}
          </h3>
          <p className="mt-[5px] font-epilogue font-normal text-white text-left leading-[18px] truncate">
            {description}
          </p>
        </div>

        <div className="flex justify-between flex-wrap mt-[15px] gap-2">
          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-[14px] text-white leading-[22px]">
              {amountCollected}
            </h4>
            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-white sm:max-w-[120px] truncate">
              Jinalu kerek {target}
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-[14px] text-white leading-[22px]">
              {remainingDays}
            </h4>
            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-white sm:max-w-[120px] truncate">
              Qalğan künder
            </p>
          </div>
        </div>

        <div className="flex items-center mt-[20px] gap-[12px]">
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center">
            <img
              src={logo2}
              alt="user"
              className="object-contain"
              style={{ width: "70%", height: "70%" }}
            />
          </div>
          <p className="flex-1 font-epilogue font-normal text-[12px] text-white truncate">
            Ūyimdastyryldy <span className="text-white">{owner}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FundCard;
