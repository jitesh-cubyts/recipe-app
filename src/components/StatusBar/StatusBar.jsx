/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const StatusBar = ({ property1, className, wiFi = "/img/wi-fi.svg" }) => {
  return (
    <div className={`status-bar ${className}`}>
      <div className="symbols">
        <div className={`battery ${property1}`}>
          <div className="rectangle" />
        </div>
        <img
          className="combined-shape"
          alt="Combined shape"
          src={property1 === "dark-mode" ? "/img/combined-shape-1.svg" : "/img/combined-shape.svg"}
        />
        <img className="wi-fi" alt="Wi fi" src={property1 === "dark-mode" ? "/img/wi-fi-1.svg" : wiFi} />
      </div>
      <div className="bars-status-time">
        <div className={`time property-1-0-${property1}`}>19:27</div>
      </div>
    </div>
  );
};

StatusBar.propTypes = {
  property1: PropTypes.oneOf(["light-mode", "dark-mode"]),
  wiFi: PropTypes.string,
};
