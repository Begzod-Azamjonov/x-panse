import "./Plan.css"

import { FaCheckCircle } from 'react-icons/fa';
import { FaBriefcase, FaShoppingBag, FaTv } from 'react-icons/fa';

import React from 'react'

const Plan = () => {
    return (
        <div className="plan">
            <div className="plan-text">
                <h1>Choose your flexible plan.</h1>
            </div>

            <div className="plan-content">

                <div className="plan-card cardblue">
                    <div className="icon-container">
                    <FaBriefcase style={{ fontSize: "20px", color: '#00A3FF' }} />
                    </div>
                    <h2>Starter Plan</h2>
                    <ul className="features-list">
                        <li><FaCheckCircle className="check-icon" /> Store unlimited data</li>
                        <li><FaCheckCircle className="check-icon" /> Export to pdf, xls, csv</li>
                        <li><FaCheckCircle className="check-icon" /> Cloud server support</li>
                    </ul>
                    <div className="price">
                        <span>$9.99/year</span>
                        <p>up to 3 users + $1.99 per user</p>
                    </div>
                    <button className="get-this-button">Get this ➔</button>
                </div>

                <div className="plan-card cardyellow">
                    <div className="icon-container">
                        <FaShoppingBag style={{ fontSize: 20, color: "#FF7235" }} />
                    </div>
                    <h2>Silver Plan</h2>
                    <ul className="features-list">
                        <li><FaCheckCircle className="check-icon" /> Store unlimited data</li>
                        <li><FaCheckCircle className="check-icon" /> Export to pdf, xls, csv</li>
                        <li><FaCheckCircle className="check-icon" /> Cloud server support</li>
                    </ul>
                    <div className="price">
                        <span>$19.99/year</span>
                        <p>up to 3 users + $1.99 per user</p>
                    </div>
                    <button className="get-this-button">Get this ➔</button>
                </div>

                <div className="plan-card cardpurple">
                    <div className="icon-container">
                        <FaTv style={{ fontSize: 20, color: '#4D12EE' }} />
                    </div>
                    <h2>Diamond Plan</h2>
                    <ul className="features-list">
                        <li><FaCheckCircle className="check-icon" /> Store unlimited data</li>
                        <li><FaCheckCircle className="check-icon" /> Export to pdf, xls, csv</li>
                        <li><FaCheckCircle className="check-icon" /> Cloud server support</li>
                    </ul>
                    <div className="price">
                        <span>$29.99/year</span>
                        <p>up to 3 users + $1.99 per user</p>
                    </div>
                    <button className="get-this-button">Get this ➔</button>
                </div>
            </div>
        </div>
    )
}

export default Plan
