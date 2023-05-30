import React, { useState, useEffect } from "react";

import {
  DisplayCampaigns,
  HeroSection,
  Service,
  Subscribe,
  Brand,
  Video,
  Title,
} from "../components";
import { useStateContext } from "../context";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <div>
      <HeroSection />
      <Title
        heading="Ūsaq bop körıngenmen közıñızge,"
        paragraph="Qiyrşyq tas jiylyp tau bolady."
      />
      <Service />

      <DisplayCampaigns
        title="Barlyq qaiyrymdylyq kampanialar"
        isLoading={isLoading}
        campaigns={campaigns}
      />
      <Subscribe />
      <Brand />
      <Video />
    </div>
  );
};

export default Home;
