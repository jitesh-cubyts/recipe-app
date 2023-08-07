import React from "react";
import { Button } from "../../components/Button";
import { Close } from "../../icons/Close";
import "./style.css";
import icon2 from "../../img/image-13.png";
import icon12 from "../../img/image-12.png";
import icon15 from "../../img/image-15.png";
import icon14 from "../../img/image-14.png";

export const Customisation = () => {
  return (
    <div className="customisation">
      <div className="div">
        <h1 className="recent-recipe-title">
          What do you feel like cooking today?
        </h1>
        <div className="frame">
          <div className="frame-2">
            <div className="text-wrapper-2">Select top cuisines</div>
            <div className="frame-3">
              <div className="frame-4">
                <div className="field-row-wrapper">
                  <img className="image" alt="Image" src={icon2} />
                  <div className="field-text">Mexican</div>
                </div>
                <div className="field-row-wrapper-2">
                  <img className="image" alt="Image" src={icon12} />
                  <div className="field-text">Indian</div>
                </div>
              </div>
              <div className="frame-4">
                <div className="field-row-wrapper">
                  <img className="image" alt="Image" src={icon15} />
                  <div className="field-text">Italian</div>
                </div>
                <div className="field-row-wrapper">
                  <img className="image" alt="Image" src={icon14} />
                  <div className="field-text">Korean</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-2">
            <p className="text-wrapper-2">
              Any specific ingredients you want to add
            </p>
            <div className="frame-3">
              <div className="field-row-wrapper-3">
                <div className="field-text-2">Mushroom</div>
                <img className="line" alt="Line" src="/img/line-1.svg" />
              </div>
              <div className="frame-4">
                <div className="field-row-wrapper-4">
                  <div className="field-text-2">Spinach</div>
                  <Close className="close-1" color="#575757" />
                </div>
                <div className="field-row-wrapper-4">
                  <div className="field-text-2">Rice</div>
                  <Close className="close-1" color="#575757" />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-2">
            <p className="text-wrapper-2">What is your skill level?</p>
            <div className="field-row-wrapper-5">
              <div className="field-text-3">Beginner</div>
            </div>
            <div className="field-row-wrapper-6">
              <div className="field-text-3">Intermediary</div>
            </div>
            <div className="field-row-wrapper-5">
              <div className="field-text-3">Advanced</div>
            </div>
          </div>
          <div className="frame-2">
            <p className="text-wrapper-2">How much time do you have?</p>
            <div className="field-row-wrapper-5">
              <div className="field-text-3">Super quick! 20 mins</div>
            </div>
            <div className="field-row-wrapper-6">
              <p className="field-text-3">I have some time. 40 mins</p>
            </div>
            <div className="field-row-wrapper-5">
              <p className="field-text-3">
                I’ll cook leisurely today. 60 min and above
              </p>
            </div>
          </div>
          <div className="frame-2">
            <p className="text-wrapper-2">Who are you cooking for?</p>
            <div className="field-row-wrapper-5">
              <div className="field-text-3">Just me</div>
            </div>
            <div className="field-row-wrapper-6">
              <div className="field-text-3">2 people</div>
            </div>
            <div className="field-row-wrapper-5">
              <div className="field-text-3">Group of 4</div>
            </div>
          </div>
        </div>
        <Button
          className="button-instance"
          labelClassName="design-component-instance-node"
          property="with-icon"
          size="large"
          state="default"
          text="Let’s see some recipes"
          type="primary"
          visible={false}
        />
      </div>
    </div>
  );
};
