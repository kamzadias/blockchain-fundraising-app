import React from "react";

const CustomButton = ({ btnType, title, handleClick, styles }) => {
  return (
    <button
      type={btnType}
      className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`}
      onClick={handleClick}
      style={{
        boxShadow: "0px 2px 5px grey",
      }}
    >
      {title}
    </button>
  );
};

export default CustomButton;
