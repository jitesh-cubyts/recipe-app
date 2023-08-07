/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const IconGeneralArrow = ({ className, union = "/img/union.svg" }) => {
  return (
    <div className={`icon-general-arrow ${className}`}>
      <Link to={"/results"}>
        <img className="union-3" alt="Union" src={union} />
      </Link>
    </div>
  );
};

IconGeneralArrow.propTypes = {
  union: PropTypes.string,
};
