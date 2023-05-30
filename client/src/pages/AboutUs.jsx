import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
//INTERNAL IMPORT
import Style from "../styles/aboutus.module.css";
import { Brand } from "../components/index";
import images from "../assets/img";

const AboutUs = () => {
  const founderArray = [
    {
      name: "Dias Qamza",
      position: "Bas direktor, teñ qūryltaişy",
      images: images.founder1,
    },
    {
      name: "Arshat Talap",
      position: "Bas direktor, teñ qūryltaişy",
      images: images.founder3,
    },
    {
      name: "Yerkebulan Zhigerbayev",
      position: "Bas direktor, teñ qūryltaişy",
      images: images.founder2,
    },
  ];

  const factsArray = [
    {
      title: "10 million",
      info: "Maqalalar bükıl älemde jarialandy (2021 jyldyñ 30 qyrküiegındegı jağdai boiynşa)",
    },
    {
      title: "100,000",
      info: "Tırkelgen paidalanuşynyñ eseptık jazbasy (2021 jylğy 30 qyrküiektegı jağdai boiynşa)",
    },
    {
      title: "220+",
      info: "Bız qatysatyn elder men aimaqtar (2021 jylğy 30 qyrküiektegı jağdai boiynşa)",
    },
  ];
  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>👋 Bız turaly</h1>
            <p>
              Bızdıñ qaiyrymdylyq kampanialar örşıl ideialardy şyndyqqa
              ainaldyrady. Būl jasauşylarğa öner tuyndylaryna arnalğan jaña
              ideialaryn qarjylyq jağynan qoldaityn körermendermen talqylauğa
              mümkındık beredı.
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            <img
              src={images.bg63}
              className={Style.aboutus_box_hero_right_img}
            />
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>⛱ Negızın qalauşy</h2>
          <p>
            Bız beitarap jäne täuelsızbız jäne kün saiyn jasaimyz bıregei
            älemdık deñgeidegı bağdarlamalar men mazmūn
          </p>
        </div>

        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_founder_box}>
            {founderArray.map((el, i) => (
              <div key={i} className={Style.aboutus_box_founder_box_img}>
                <img
                  src={el.images}
                  alt={el.name}
                  style={{ height: "250px" }}
                  className={Style.aboutus_box_founder_box_img_img}
                />
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>🚀 Qysqaşa faktıler</h2>
          <p>
            Bız beitarap jäne täuelsızbız jäne kün saiyn jasaimyz bıregei
            älemdık deñgeidegı bağdarlamalar men mazmūn
          </p>
        </div>

        <div className={Style.aboutus_box_facts}>
          <div className={Style.aboutus_box_facts_box}>
            {factsArray.map((el, i) => (
              <div key={i} className={Style.aboutus_box_facts_box_info}>
                <h3>{el.title}</h3>
                <p>{el.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default AboutUs;
