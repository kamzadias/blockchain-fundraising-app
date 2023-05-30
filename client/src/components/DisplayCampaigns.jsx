import React from "react";
import { useNavigate } from "react-router-dom";

import FundCard from "./FundCard";
import { loader } from "../assets";

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };

  return (
    <div style={{ marginTop: "4rem", marginBottom: "8rem" }}>
      <h1
        className="font-epilogue font-semibold text-[18px] text-center"
        style={{ fontSize: "25px", fontFamily: "CirceBold" }}
      >
        {title} ({campaigns.length})
      </h1>

      <div className="flex flex-wrap mt-[60px] gap-[26px] justify-center">
        {isLoading && (
          <img
            src={loader}
            alt="loader"
            className="w-[100px] h-[100px] object-contain"
          />
        )}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            Sız älı eşqandai qaiyrymdylyq kampania jasağan joqsyz
          </p>
        )}

        {!isLoading &&
          campaigns.length > 0 &&
          campaigns.map((campaign) => (
            <FundCard
              key={campaign.id}
              {...campaign}
              handleClick={() => handleNavigate(campaign)}
            />
          ))}
      </div>
    </div>
  );
};

export default DisplayCampaigns;
