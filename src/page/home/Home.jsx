import "./Home.css";

import Illustration from "../../image/Illustration.png";

import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-text">
          <h1>
            Track your <br /> Expenses & <br /> Save Money
          </h1>

          <p>Helps you to organize your income and expenses</p>

          <div className="button-content">
            <button>Try free demo 🔻</button>
            <p>— Web, iOS and Android</p>
          </div>
        </div>
        <div className="home-img">
          <img src={Illustration} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
