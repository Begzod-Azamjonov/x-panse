import "./Header.css";

import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-box">
        <div className="logo">
          <p className="logo-X">X</p>
          <p className="logo-text">pense</p>
        </div>
        <ul>
          <li>Features</li>
          <li>About us</li>
          <li>Pricing</li>
          <li>Feedback</li>
        </ul>

        <button>Request a demo</button>
      </div>
    </div>
  );
};

export default Header;
