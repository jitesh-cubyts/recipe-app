/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconGeneralStar = ({ className, iconGeneralStar = "/img/icon-general-star.svg" }) => {
  return <img className={`icon-general-star ${className}`} alt="Icon general star" src={iconGeneralStar} />;
};

IconGeneralStar.propTypes = {
  iconGeneralStar: PropTypes.string,
};
