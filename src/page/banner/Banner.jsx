import "./Banner.css";

import { FaChevronDown } from "react-icons/fa";

import layer4 from "../../image/Layer 4.png"
import layer10 from "../../image/Layer 10.png"

import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="content-text">
          <h1>
            20M+ downloaded from 32 <br /> diffrent countires
          </h1>

          <p>Try demo for 7 days with full features.</p>
        </div>

        <div className="banner-images">
            <img src={layer10} alt="" />

            <button className="banner-img-button">Try free demo <FaChevronDown /></button>

            <img src={layer4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
