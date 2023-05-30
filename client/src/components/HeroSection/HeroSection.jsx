import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";

import images from "../../assets/img";

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Keñ bolsañ, kem bolmaisyñ</h1>
          <p>
            Bızdıñ qaiyrymdylyq kampanialar örşıl ideialardy şyndyqqa
            ainaldyrady. Būl jasauşylarğa öner tuyndylaryna arnalğan jaña
            ideialaryn qarjylyq jağynan qoldaityn körermendermen talqylauğa
            mümkındık beredı.
          </p>
          <img src={images.bg7} alt="" />
        </div>
        <div className={Style.heroSection_box_right}>
          <img src={images.bg1} alt="Hero section" width={650} height={600} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
