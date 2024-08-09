import "./Testimonial.css";

import Ellipse2 from "../../image/EllipseUser2.png"
import Ellipse3 from "../../image/EllipseUser3.png"
import Ellipse4 from "../../image/EllipseUser4.png"
import Ellipse1 from "../../image/Ellipse 2.png"
import React from "react";

const Testimonial = () => {

    return (
        <div className="testimonial">
            <div className="testimonial-content">
                <h1>
                    We have millions of <br /> best wishers
                </h1>

                <div className="testimonial-cards">
                    <div className="card-box border-top-red">
                        <p>Eleifend fames amet, fames enim. <br /> Ullamcorper pellentesque ac volutpat <br /> nibh aliquet et, ut netus. Vel, fringilla <br /> sit eros pretium felis massa mauris,<br /> aliquam congue.</p>

                        <div className="user-card">
                            <img src={Ellipse2} alt="" />
                            <p>Cameron Williamson, <span>CEO</span></p>
                        </div>
                    </div>

                    <div className="card-box border-top-blue">
                        <p>Eleifend fames amet, fames enim. <br /> Ullamcorper pellentesque ac volutpat <br /> nibh aliquet et, ut netus. Vel, fringilla <br /> sit eros pretium felis massa mauris,<br /> aliquam congue.</p>

                        <div className="user-card">
                            <img src={Ellipse3} alt="" />
                            <p>Cameron Williamson, <span>CEO</span></p>
                        </div>
                    </div>

                    <div className="card-box border-top-kok">
                        <p>Eleifend fames amet, fames enim. <br /> Ullamcorper pellentesque ac volutpat <br /> nibh aliquet et, ut netus. Vel, fringilla <br /> sit eros pretium felis massa mauris,<br /> aliquam congue.</p>

                        <div className="user-card">
                            <img src={Ellipse4} alt="" />
                            <p>Cameron Williamson, <span>CEO</span></p>
                        </div>
                    </div>

                    <div className="card-box border-top">
                        <p>Eleifend fames amet, fames enim. <br /> Ullamcorper pellentesque ac volutpat <br /> nibh aliquet et, ut netus. Vel, fringilla <br /> sit eros pretium felis massa mauris,<br /> aliquam congue.</p>

                        <div className="user-card">
                            <img src={Ellipse1} alt="" />
                            <p>Cameron Williamson, <span>CEO</span></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonial;
