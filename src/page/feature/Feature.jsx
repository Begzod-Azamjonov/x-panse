import "./Feature.css";

import Illustrator from "../../image/Illustrator.png";
import Illustrator2 from "../../image/Illustrator2.png";
import Illustrator3 from "../../image/Ilustrator3.png";

import React from "react";

const Feature = () => {
  return (
    <div className="feature">
      <div className="feature-content">
        <div className="feature-text">
          <p>Alwalys online</p>

          <h1>
            Real-time <br /> support <br /> with cloud
          </h1>

          <p>
            Tellus lacus morbi sagittis lacus in. Amet nisl at <br /> mauris
            enim accumsan nisi, tincidunt vel. Enim <br /> ipsum, amet quis
            ullamcorper eget ut.
          </p>

          <a href="#">Learn more →</a>
        </div>
        <div className="feature-img">
          <img src={Illustrator} alt="" />
        </div>
      </div>

      <div className="feature-content">
        <div className="feature-img">
          <img src={Illustrator2} alt="" />
        </div>
        <div className="feature-text">
          <p>free some cost</p>

          <h1>
          Save cost <br /> for you and <br /> family
          </h1>

          <p>
            Tellus lacus morbi sagittis lacus in. Amet nisl at <br /> mauris
            enim accumsan nisi, tincidunt vel. Enim <br /> ipsum, amet quis
            ullamcorper eget ut.
          </p>

          <a href="#">Learn more →</a>
        </div>
      </div>

      <div className="feature-content">
        <div className="feature-text">
          <p>Use anytime</p>

          <h1>
          Use anytime <br /> when you <br /> need
          </h1>

          <p>
            Tellus lacus morbi sagittis lacus in. Amet nisl at <br /> mauris
            enim accumsan nisi, tincidunt vel. Enim <br /> ipsum, amet quis
            ullamcorper eget ut.
          </p>

          <a href="#">Learn more →</a>
        </div>
        <div className="feature-img">
          <img src={Illustrator3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
