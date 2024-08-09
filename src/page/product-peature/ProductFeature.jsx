import "./ProductFeature.css";
import { FaLaptop, FaCloud, FaCalendar } from 'react-icons/fa';

import React from "react";

const ProductFeature = () => {
  return (
    <div className="productFeature">
      <div className="productFeature-content">
        <div className="productFeature-text">
          <h1>
            The Product we <br /> work with.
          </h1>

          <p>
            Tellus lacus morbi sagittis lacus in. Amet nisl at <br /> mauris
            enim aumsan <br /> nisi, tincidunt vel. Enim ipsum, at <br /> quis
            ullamcorper eget ut.
          </p>
        </div>

        <div className="cards">
          <div className="card-box">
            <div className="icon yellow" style={{ color: "#FFA500" }}>
              <FaLaptop />
            </div>
            <h3>Cross platform</h3>
            <p>Elit esse cillum dolore eu fugiat nulla pariatur</p>

            <p className="arrow-left">→</p>
          </div>

          <div className="card-box">
            <div className="icon pink" style={{ color: "#FF69B4" }}>
              <FaCloud />
            </div>
            <h3>Cloud server</h3>
            <p>Elit esse cillum dolore eu fugiat nulla pariatur</p>

            <p className="arrow-left">→</p>
          </div>

          <div className="card-box">
            <div className="icon blue" style={{ color: "#8A2BE2" }}>
              <FaCalendar />
            </div>
            <h3>Pure Javascript</h3>
            <p>Elit esse cillum dolore eu fugiat nulla pariatur</p>

            <p className="arrow-left">→</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeature;
