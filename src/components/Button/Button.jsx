/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconGeneralArrow } from "../IconGeneralArrow";
import "./style.css";
import { Link } from "react-router-dom";

export const Button = ({
  size,
  type,
  state,
  property,
  className,
  labelClassName,
  text = "Placeholder",
  to = "/profiling",
  iconGeneralArrowUnion = "/img/union-35.svg",
}) => {
  return (
    <div className={`button ${property} ${size} ${type} ${state} ${className}`}>
      {property === "with-icon" && (
        <div className={`label ${labelClassName}`}>
          {" "}
          <Link to={to}>{text}</Link>
        </div>
      )}

      {["icon-only", "with-icon"].includes(property) && (
        <IconGeneralArrow
          className="icon-general-arrow-right"
          union={
            property === "with-icon"
              ? iconGeneralArrowUnion
              : state === "disable" && property === "icon-only"
              ? "/img/union-30.svg"
              : property === "icon-only" &&
                state === "default" &&
                ["secondary", "text"].includes(type)
              ? "/img/union-22.svg"
              : property === "icon-only" &&
                type === "primary" &&
                ["default", "pressed"].includes(state)
              ? "/img/union-34.svg"
              : "/img/union-21.svg"
          }
          unionClassName="icon-general-arrow-instance"
        />
      )}

      {property === "no-icon" && (
        <div className="text-wrapper">
          <Link to={to}>{text}</Link>
        </div>
      )}
    </div>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["large", "small"]),
  type: PropTypes.oneOf(["primary", "text", "secondary"]),
  state: PropTypes.oneOf(["pressed", "disable", "default"]),
  property: PropTypes.oneOf(["icon-only", "no-icon", "with-icon"]),
  text: PropTypes.string,
  iconGeneralArrowUnion: PropTypes.string,
};
