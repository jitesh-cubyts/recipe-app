/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconNavHome } from "../IconNavHome";
import "./style.css";

export const NavBarMenu = ({ state, className, override = <IconNavHome className="icon-nav-home-inactive" /> }) => {
  return <div className={`nav-bar-menu ${state} ${className}`}>{override}</div>;
};

NavBarMenu.propTypes = {
  state: PropTypes.oneOf(["active", "inactive", "create"]),
};
