import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";

//INTERNAL IMPORT
import Style from "./Subscribe.module.css";
import images from "../../assets/img";
import { logo2 } from "../../assets";

const Subscribe = () => {
  return (
    <div className={Style.subscribe}>
      <div className={Style.subscribe_box}>
        <div className={Style.subscribe_box_left}>
          <a href="/">
            <img src={logo2} alt="" className={Style.Brand_box_left_logo} />
          </a>
          <h2>Bailanysta bolyñyz</h2>
          <p>Qyzyqtyratyn sūraqtaryñyzdy qoiyñyz</p>
          <div className={Style.subscribe_box_left_box}>
            <span>01</span>
            <small>Qosymşa jeñıldık alyñyz</small>
          </div>

          <div className={Style.subscribe_box_left_box}>
            <span>02</span>
            <small>Premium satyp alyñyz</small>
          </div>

          <div className={Style.subscribe_box_left_input}>
            <input
              type="email"
              placeholder="Elektrondyq poşta mekenjaiyn engızıñız"
            />
            <RiSendPlaneFill className={Style.subscribe_box_left_input_icon} />
          </div>
        </div>

        <div className={Style.subscribe_box_right}>
          <img src={images.bg60} alt="get update" height={450} />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
