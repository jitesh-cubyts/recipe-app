/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconNavProfile = ({ className, union = "/img/union-3.svg" }) => {
  return (
    <div className={`icon-nav-profile ${className}`}>
      <img className="union-4" alt="Union" src={union} />
    </div>
  );
};

IconNavProfile.propTypes = {
  union: PropTypes.string,
};
