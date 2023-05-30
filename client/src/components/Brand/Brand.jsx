import React from "react";
import { useNavigate } from "react-router-dom";
import { DiJqueryLogo } from "react-icons/di";

//INTERNAL IMPORT
import Style from "./Brand.module.css";
import images from "../../assets/img";
import { Button } from "../index";
import { logo2 } from "../../assets";

const Brand = () => {
  const navigate = useNavigate();
  return (
    <div className={Style.Brand}>
      <div className={Style.Brand_box}>
        <div className={Style.Brand_box_right}>
          <img src={images.bg61} alt="brand logo" />
        </div>
        <div className={Style.Brand_box_left}>
          {/* <Image src={images.logo} alt="brand logo" width={100} height={100} /> */}
          <a href="/">
            <img src={logo2} alt="" className={Style.Brand_box_left_logo} />
          </a>
          <h1>Qaiyrymdylyq kampaniañyzdy zertteñız nemese qūryñyz</h1>
          <p>Tömendegı batyrmalarğa basyñyz.</p>

          <div className={Style.Brand_box_left_btn}>
            <Button
              btnName="Jasau"
              handleClick={() => navigate("/create-campaign")}
            />
            <Button btnName="Zertteu" handleClick={() => navigate("/search")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
