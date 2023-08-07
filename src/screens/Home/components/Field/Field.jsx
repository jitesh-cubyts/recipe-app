/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconGeneralSearch } from "../IconGeneralSearch";
import "./style.css";

export const Field = ({
  size,
  type,
  state,
  properties,
  className,
  iconGeneralSearchIconGeneralSearch = "/img/icon-general-search-3.svg",
  text = "Placeholder",
}) => {
  return (
    <div className={`field ${state} ${className}`}>
      {((properties === "with-icon" && state === "default") ||
        (properties === "with-icon" && state === "disable") ||
        (properties === "with-icon" && state === "filled-focus") ||
        (properties === "with-icon" && state === "filled")) && (
        <IconGeneralSearch
          className="icon-general-search-instance"
          iconGeneralSearch={iconGeneralSearchIconGeneralSearch}
        />
      )}

      {properties === "with-icon" && state === "focus" && (
        <div className="icon-search">
          <img className="union" alt="Union" src="/img/union-11.svg" />
        </div>
      )}

      <div className="label">
        {state === "disable" && <>Search recipes</>}

        {state === "filled-focus" && <>Placeholder|</>}

        {["default", "filled"].includes(state) && <>{text}</>}

        {state === "focus" && <>|</>}
      </div>
    </div>
  );
};

Field.propTypes = {
  size: PropTypes.oneOf(["large"]),
  type: PropTypes.oneOf(["primary"]),
  state: PropTypes.oneOf(["filled-focus", "default", "filled", "focus", "disable"]),
  properties: PropTypes.oneOf(["no-icon", "with-icon"]),
  iconGeneralSearchIconGeneralSearch: PropTypes.string,
  text: PropTypes.string,
};
