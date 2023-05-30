import React, { useEffect, useState } from "react";

//INTRNAL IMPORT
import Style from "../styles/searchPage.module.css";
import {
  Brand,
  Loader,
  SearchBar,
  Banner,
  FundCard,
  DisplayCampaigns,
} from "../components/index";

import images from "../assets/img";

//SMART CONTRACT IMPORT
import { useStateContext } from "../context";

const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const [campaignsCopy, setCampaignsCopy] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setCampaignsCopy(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  const onHandleSearch = (value) => {
    const filteredCampaigns = campaigns.filter(
      ({ title }) => title && title.includes(value.toLowerCase())
    );

    if (filteredCampaigns.length === 0) {
      setCampaigns(campaignsCopy);
    } else {
      setCampaigns(filteredCampaigns);
    }
  };

  const onClearSearch = () => {
    if (campaigns.length && campaignsCopy.length) {
      setCampaigns(campaignsCopy);
    }
  };

  return (
    <div className={Style.searchPage}>
      <SearchBar
        onHandleSearch={onHandleSearch}
        onClearSearch={onClearSearch}
      />
      {campaigns.length == 0 ? (
        <Loader />
      ) : (
        <DisplayCampaigns
          title="Barlyq qaiyrymdylyq kampanialar"
          isLoading={isLoading}
          campaigns={campaigns}
        />
      )}
      <Brand />
    </div>
  );
};

export default Search;
