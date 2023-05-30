import React from "react";

//INTERNAL IMPORT
import Style from "./Service.module.css";
import images from "../../assets/img";

const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        <div className={Style.service_box_item}>
          <img
            src={images.service1}
            alt="Filter & Discover"
            width={100}
            height={100}
            className={Style.service_box_item_img}
          />
          <p className={Style.service_box_item_step}>
            <span>1 qadam</span>
          </p>
          <h3>MetaMask ämianyna qosylyñyz</h3>
          <p>Qosylu batyrmasyn basyñyz nemese ämiannyñ qosylu betıne ötıñız</p>
        </div>
        <div className={Style.service_box_item}>
          <img
            src={images.service2}
            alt="Filter & Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>2 qadam</span>
          </p>
          <h3>Zertteu & Izdeu</h3>
          <p>
            Özıñızge ūnaityn qaiyrymdylyq kampanialaryn tabyñyz nemese ızdeu
            arqyly ızdeñız
          </p>
        </div>
        <div className={Style.service_box_item}>
          <img
            src={images.service3}
            alt="Connect Wallet"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>3 qadam</span>
          </p>
          <h3>Qaiyrymdylyq kampanialaryn qūru</h3>
          <p>
            Onlain formany tiıstı aqparatpen toltyryñyz jäne Sepolia ETH arqyly
            töleñız
          </p>
        </div>
        <div className={Style.service_box_item}>
          <img
            src={images.service1}
            alt="Filter & Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>4 qadam</span>
          </p>
          <h3>Qaiyrmaldyq jasañyz</h3>
          <p>Belgılı bır ölşemde aqşany qaiyrymdylyqqa jūmsañyz</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
