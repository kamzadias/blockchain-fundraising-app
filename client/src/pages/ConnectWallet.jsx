import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/connectWallet.module.css";
import images from "../assets/img";
import { useStateContext } from "../context";
const ConnectWallet = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  const { connect, address, contract, getCampaigns } = useStateContext();
  const providerArray = [
    {
      provider: images.provider1,
      name: "MetaMask",
    },
    {
      provider: images.provider2,
      name: "walletConnect",
    },
    {
      provider: images.provider3,
      name: "walletlink",
    },
    {
      provider: images.provider1,
      name: "Formatic",
    },
  ];
  return (
    <div className={Style.connectWallet}>
      <div className={Style.connectWallet_box}>
        <h1>Ämiandy qosyñyz</h1>
        <p className={Style.connectWallet_box_para}>
          Bızdıñ qol jetımdı ämian jetkızuşılerımızdıñ bırıne qosylyñyz nemese
          jañasyn jasañyz
        </p>

        <div className={Style.connectWallet_box_provider}>
          {providerArray.map((el, i) => (
            <div
              className={`${Style.connectWallet_box_provider_item} ${
                activeBtn == i + 1 ? Style.active : ""
              }`}
              key={i + 1}
              onClick={() => (setActiveBtn(i + 1), connect())}
            >
              <img
                src={el.provider}
                alt={el.provider}
                width={50}
                height={50}
                className={Style.connectWallet_box_provider_item_img}
              />
              <p>{el.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
