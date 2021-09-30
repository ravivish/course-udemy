import React from "react";
// import './Modal.css';
import "./Banner.css";

const Banner = (props) => (
    <React.Fragment>
        <div className="Banner">
            <img alt="banner" className="img-banner" src={process.env.PUBLIC_URL + '/images/banner.jpg'} />
            <div className="banner-quotes">
                <p className="main-text">
                    <strong>Learning that gets you</strong>
                </p>
                <span>Skill for you present(and your future).Get Started with us</span>
            </div>
        </div>
    </React.Fragment>
);

export default Banner;
