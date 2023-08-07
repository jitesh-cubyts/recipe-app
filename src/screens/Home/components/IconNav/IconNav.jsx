/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconNav = ({ className, union = "/img/union-5.svg" }) => {
  return (
    <div className={`icon-nav ${className}`}>
      <img className="union-3" alt="Union" src={union} />
    </div>
  );
};

IconNav.propTypes = {
  union: PropTypes.string,
};
