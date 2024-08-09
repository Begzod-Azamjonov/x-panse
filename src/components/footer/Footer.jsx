import "./Footer.css"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="logo up">
          <p className="logo-X">X</p>
          <p className="logo-text">pense</p>
        </div>

        <div className="links">
          <h1>Links</h1>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div className="legal">
          <h1>Legal</h1>

          <ul>
            <li><a href="#">Terms of use</a></li>
            <li><a href="#">Terms of conditions</a></li>
            <li><a href="#">Privecy policy</a></li>
            <li><a href="#">Cookie policy</a></li>
          </ul>
        </div>

        <div className="newslatter">
          <h1>Newsletter</h1>

          <p>Over 25000 people have subscribed</p>

          <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
            
          </div>

          <p className="small">We don't sell your email and spam</p>
        </div>

      </div>
    </div>
  )
}

export default Footer
