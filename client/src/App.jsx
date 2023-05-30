import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/globals.css";

import { Navbar, Footer } from "./components";
import {
  CampaignDetails,
  CreateCampaign,
  AboutUs,
  Home,
  Profile,
  ConnectWallet,
  Search,
} from "./pages";

const App = () => {
  return (
    <div className="relative xl:-8 p-4 bg-[#FAFAFA] min-h-screen flex flex-row">
      <div className="flex min-h-full flex-col max-sm:w-full max-w-[1400px] mx-auto sm:pl-2">
        <Navbar />
        <div className="flex-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/search" element={<Search />} />
            <Route path="/create-campaign" element={<CreateCampaign />} />
            <Route path="/campaign-details/:id" element={<CampaignDetails />} />
            <Route path="/connect-wallet" element={<ConnectWallet />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
