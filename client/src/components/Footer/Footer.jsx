import React from "react";
import { DiJqueryLogo } from "react-icons/di";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";

//INTERNAL IMPORT
import Style from "./Footer.module.css";
import images from "../../assets/img";
import { Link } from "react-router-dom";
import { navlinks } from "../../constants";
import { logo2 } from "../../assets";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          {/* <Image src={images.logo} alt="footer logo" height={100} width={100} /> */}
          <a href="/">
            <img src={logo2} alt="" className={Style.footer_box_social_logo} />
          </a>
          <p>
            Bızdıñ qaiyrymdylyq kampanialar örşıl ideialardy şyndyqqa
            ainaldyrady. Būl jasauşylarğa öner tuyndylaryna arnalğan jaña
            ideialaryn qarjylyq jağynan qoldaityn körermendermen talqylauğa
            mümkındık beredı.
          </p>

          <div className={Style.footer_social}>
            <a href="https://www.facebook.com/profile.php?id=100092265956805">
              <TiSocialFacebook />
            </a>
            <a href="https://www.linkedin.com/in/umit-fundraising-a21513276/">
              <TiSocialLinkedin />
            </a>
            <a href="https://twitter.com/umitkazakhstan">
              <TiSocialTwitter />
            </a>
            <a href="https://www.youtube.com/channel/UC-SncDN-kr_25sYE9-CppOQ">
              <TiSocialYoutube />
            </a>
            <a href="https://www.instagram.com/umit.fundraising">
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        <div className={Style.footer_box_discover}>
          <h3 style={{ fontFamily: "CirceNormal", fontSize: "16px" }}>
            Anyqtama
          </h3>
          <div className={Style.box}>
            {navlinks.map((link, i) => (
              <div className={Style.helpCenter} key={i + 1}>
                <Link to={{ pathname: link.link }}>{link.name}</Link>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.subscribe}>
          <h3 style={{ fontFamily: "CirceNormal", fontSize: "16px" }}>
            Jazylu
          </h3>

          <div className={Style.subscribe_box}>
            <input
              type="email"
              placeholder="Elektrondyq poşta mekenjaiyn engızıñız"
            />
            <RiSendPlaneFill className={Style.subscribe_box_send} />
          </div>
          <div className={Style.subscribe_box_info}>
            <p>
              Bızdıñ qaiyrymdylyq kampanialar örşıl ideialardy şyndyqqa
              ainaldyrady.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
