import React from "react";

//INTERNALIMPORT
import Style from "./Video.module.css";
import images from "../../assets/img";
import YouTube from "react-youtube";
const Video = () => {
  const opts = {
    height: "600",
    width: "100%",
  };
  return (
    <div className={Style.Video}>
      <div className={Style.Video_box}>
        <h1>
          <span>🎬</span> Beinebaian
        </h1>
        <p>Bızdıñ proekt turaly beinebaian arqyly qosymşa aqparat alyñyz</p>

        <div className={Style.Video_box_frame}>
          <div className={Style.Video_box_frame_left}>
            <YouTube videoId="6eiLvt18OmY" opts={opts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
