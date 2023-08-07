/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconGeneralPlay = ({ className, iconGeneralPlay = "/img/icon-general-play.svg" }) => {
  return <img className={`icon-general-play ${className}`} alt="Icon general play" src={iconGeneralPlay} />;
};

IconGeneralPlay.propTypes = {
  iconGeneralPlay: PropTypes.string,
};
