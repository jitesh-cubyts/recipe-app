import React from "react";
import { IconGeneralArrow } from "../../components/IconGeneralArrow";
import "./style.css";
import { Link } from "react-router-dom";

export const IfTheyHave = () => {
  return (
    <div className="if-they-have">
      <div className="div">
        <div className="frame">
          <div className="video">
            <div className="group" />
            <Link to={"/recipe"}>
              <div className="label">Stirred Fried Vegetables</div>
            </Link>
          </div>
          <div className="video">
            <div className="group-2" />
            <Link to={"/recipe"}>
              <div className="label">Chatpata Imli Chicken</div>
            </Link>
          </div>
          <div className="video">
            <div className="group-3" />
            <Link to={"/recipe"}>
              <div className="label">Desi chicken shwarma</div>
            </Link>
          </div>
          <div className="video">
            <div className="group-4" />
            <Link to={"/recipe"}>
              <div className="label">Tandoori Chicken</div>
            </Link>
          </div>
        </div>
        <div className="heading">
          <h1 className="title">Check out some options</h1>
          
          <IconGeneralArrow
            className="icon-general-arrow-left"
            union="/img/union.svg"
          />
        </div>
      </div>
    </div>
  );
};
