import React from "react";
import { Button } from "../../components/Button";
import { HomeIndicator } from "../../components/HomeIndicator";
import "./style.css";

export const Onboarding = () => {
  return (
    <div className="onboarding">
      <div className="div">
        <div className="overlap-group">
          <div className="effect" />
          <div className="content">
            <Button
              className="button-instance"
              iconGeneralArrowUnion="/img/union-37.svg"
              labelClassName="design-component-instance-node"
              property="with-icon"
              size="large"
              state="default"
              text="Get started"
              to="/profiling"
              type="primary"
            />
            <div className="text-2">
              <h1 className="header-title">
                Let’s get
                <br />
                Cooking
              </h1>
              <p className="caption">Find easy and delicious recipes that you like</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
