import "./Product.css";

import image from "../../image/Image.png";

import image1 from "../../image/image 1.png";
import image2 from "../../image/image 2.png";
import image3 from "../../image/image 3.png";
import image4 from "../../image/image 4.png";
import image5 from "../../image/Image 5.png";

import React from "react";

const Product = () => {
  return (
    <div className="product">
      <div className="product-box">
        <img src={image} alt="" />
      </div>
      <div className="brands">
        <ul>
          <li className=" clipped-element">
            <img className=".parent-element" src={image1} alt="" />
          </li>
          <li>
            <img src={image2} alt="" />
          </li>
          <li>
            <img src={image3} alt="" />
          </li>
          <li>
            <img src={image4} alt="" />
          </li>
          <li>
            <img src={image5} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
