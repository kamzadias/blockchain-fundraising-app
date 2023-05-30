import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import { useStateContext } from "../context";
import { CountBox, CustomButton, Loader } from "../components";
import { calculateBarPercentage, daysLeft } from "../utils";
import { user } from "../assets";

const CampaignDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { donate, getDonations, contract, address } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [donators, setDonators] = useState([]);

  const remainingDays = daysLeft(state.deadline);

  const fetchDonators = async () => {
    const data = await getDonations(state.pId);

    setDonators(data);
  };

  useEffect(() => {
    if (contract) fetchDonators();
  }, [contract, address]);

  const handleDonate = async () => {
    setIsLoading(true);

    await donate(state.pId, amount);

    navigate("/");
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading && <Loader />}

      <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
        <div className="flex-1 flex-col">
          <img
            src={state.image}
            alt="campaign"
            className="w-full h-[410px] object-cover rounded-xl"
          />
          <div
            className="relative w-full h-[5px] bg-[#3a3a43] mt-2"
            style={{ borderRadius: "10px" }}
          >
            <div
              className="absolute h-full bg-[#1dc071]"
              style={{
                width: `${calculateBarPercentage(
                  state.target,
                  state.amountCollected
                )}%`,
                maxWidth: "100%",
              }}
            ></div>
          </div>
        </div>

        <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
          <CountBox title="Qalğan künder" value={remainingDays} />
          <CountBox
            title={`Jinalu kerek ${state.target}`}
            value={state.amountCollected}
          />
          <CountBox title="Donorlardyñ jalpy sany" value={donators.length} />
        </div>
      </div>

      <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
        <div className="flex-[2] flex flex-col gap-[40px]">
          <div>
            <h4
              className="font-epilogue font-semibold text-[21px] text-black uppercase"
              style={{ fontFamily: "CirceBold" }}
            >
              Jasauşy
            </h4>

            <div className="mt-[20px] flex flex-row items-center flex-wrap">
              <div className="w-[52px] h-[52px] flex items-center rounded-full cursor-pointer">
                <img
                  src={user}
                  alt="user"
                  className="w-[60%] h-[60%] object-contain"
                />
              </div>
              <div>
                <h3 className="font-epilogue font-semibold text-[18px] text-black break-all">
                  {state.owner}
                </h3>
              </div>
            </div>
          </div>

          <div>
            <h4
              className="font-epilogue font-semibold text-[21px] text-black uppercase"
              style={{ fontFamily: "CirceBold" }}
            >
              Sippatama
            </h4>

            <div className="mt-[20px]">
              <p className="font-epilogue font-normal text-[18px] text-black leading-[26px] text-justify">
                {state.description}
              </p>
            </div>
          </div>

          <div>
            <h4
              className="font-epilogue font-semibold text-[21px] text-black uppercase"
              style={{ fontFamily: "CirceBold" }}
            >
              Qaiyrymdylyq jasauşylar
            </h4>

            <div className="mt-[20px] flex flex-col gap-4">
              {donators.length > 0 ? (
                donators.map((item, index) => (
                  <div
                    key={`${item.donator}-${index}`}
                    className="flex flex-col sm:flex-row justify-between items-center gap-0 sm:gap-4"
                  >
                    <p className="font-epilogue font-semibold text-[16px] sm:text-[19px] text-black leading-[26px] break-all">
                      {index + 1}. {item.donator}
                    </p>
                    <p
                      className="font-epilogue font-semibold text-[18px] sm:text-[20px] text-black leading-[26px] break-all sm:border-l sm:border-gray-500 sm:pl-4"
                      style={{}}
                    >
                      {item.donation} ETH
                    </p>
                  </div>
                ))
              ) : (
                <p className="font-epilogue font-normal text-[18px] text-black leading-[26px] text-justify">
                  Donorlar älı joq. Bırınşı bol!
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h4
            className="font-epilogue font-semibold text-[21px] text-black uppercase"
            style={{ fontFamily: "CirceBold" }}
          >
            Qor
          </h4>

          <div className="mt-[20px] flex flex-col p-4 bg-[#1c1c24] rounded-[10px]">
            <p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center text-white">
              Qaiyrymdylyq kampaniany qarjylandyru
            </p>
            <div className="mt-[30px]">
              <input
                type="number"
                placeholder="ETH 0.1"
                step="0.01"
                className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#ADADAD] bg-transparent font-epilogue text-white text-[18px] leading-[30px] placeholder:text-[#ADADAD] rounded-[10px]"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />

              <div className="my-[20px] p-4 bg-[#13131a] rounded-[10px]">
                <h4 className="font-epilogue font-semibold text-[16px] leading-[22px] text-white">
                  Mūny qoldañyz, öitkenı sız oğan senesız.
                </h4>
                <p className="mt-[20px] font-epilogue text-[14px] font-normal leading-[22px] text-[#E3E1E1]">
                  Jobany syiaqysyz ūstañyz, sebebı ol sızben söilesedı.
                </p>
              </div>

              <CustomButton
                btnType="button"
                title="Qarjylandyru"
                styles="w-full bg-[#1dc071] text-[18px]"
                handleClick={handleDonate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
