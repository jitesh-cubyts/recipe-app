/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconNavBookmark = ({ className, union = "/img/union-6.svg" }) => {
  return (
    <div className={`icon-nav-bookmark ${className}`}>
      <img className="union" alt="Union" src={union} />
    </div>
  );
};

IconNavBookmark.propTypes = {
  union: PropTypes.string,
};
