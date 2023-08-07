/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconGeneralSearch = ({ className, iconGeneralSearch = "/img/icon-general-search-4.svg" }) => {
  return <img className={`icon-general-search ${className}`} alt="Icon general search" src={iconGeneralSearch} />;
};

IconGeneralSearch.propTypes = {
  iconGeneralSearch: PropTypes.string,
};
