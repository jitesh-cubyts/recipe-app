import React from "react";
import { Button } from "../../components/Button";
import "./style.css";

export const Profiling = () => {
  return (
    <div className="profiling">
      <div className="div">
        <h1 className="recent-recipe-title">Help us understand you better</h1>
        <div className="frame">
          <div className="frame-2">
            <p className="text-wrapper-2">What’s the most important when it comes to you food?</p>
            <div className="frame-3">
              <div className="field-row-wrapper">
                <div className="field-text">Health</div>
              </div>
              <div className="field-row-wrapper-2">
                <div className="field-text">Cooking Time</div>
              </div>
            </div>
            <div className="frame-3">
              <div className="field-row-wrapper-2">
                <div className="field-text">Cost effective</div>
              </div>
              <div className="field-row-wrapper">
                <div className="field-text">Easily available</div>
              </div>
            </div>
          </div>
          <div className="frame-2">
            <p className="text-wrapper-2">Do you have any dietary restrictions?</p>
            <div className="frame-3">
              <div className="field-row-wrapper">
                <div className="field-text">Lactose Intolerant</div>
              </div>
              <div className="field-row-wrapper-2">
                <div className="field-text">Vegetarian</div>
              </div>
            </div>
            <div className="frame-3">
              <div className="field-row-wrapper-2">
                <div className="field-text">Ketogenic</div>
              </div>
              <div className="field-row-wrapper">
                <div className="field-text">Easily available</div>
              </div>
            </div>
            <div className="frame-3">
              <div className="field-row-wrapper-2">
                <div className="field-text">Dairy Free</div>
              </div>
              <div className="field-row-wrapper">
                <div className="field-text">Egg free</div>
              </div>
            </div>
            <div className="frame-3">
              <div className="field-row-wrapper-2">
                <div className="field-text">Gluten free</div>
              </div>
              <div className="field-row-wrapper">
                <div className="field-text">No peanuts</div>
              </div>
            </div>
            <div className="frame-3">
              <div className="field-row-wrapper-2">
                <div className="field-text">No alcohol</div>
              </div>
              <div className="field-row-wrapper">
                <div className="field-text">Fish</div>
              </div>
            </div>
          </div>
          <div className="frame-4">
            <p className="text-wrapper-2">Are you following any diet plans?</p>
            <div className="field-row-wrapper-3">
              <a
                className="field-text-2"
                href="https://www.google.com/search?cs=1&amp;q=keto+diet&amp;stick=H4sIAAAAAAAAAE2Qu07DQBBFCdqgxCFEpONRrBAtstd24riiAkFDAZEiQMKy14-NHT93sRN-AeipqRAVPSV_kU_wJ6RCiaJ1yqO5c--daaCTmvSwj-MwjCNojx0Gk4kZ0UXt6DKLQ0jj5ww7FJo4iymFjDiwcKzFdsO4uBleD--NH1ArQUtoiqEoKdgb9DnJWMtRCXYFYUnqDCdWujFUaFSCjtAWPREhHERETxNUWamR7JVAEBpL0gwyK8HhevUllaNu-9YsoBvH9qo0j5ELy1bdEhyvtcz31W5n5Iw9wuDIZJg4Gd3w9W0eidzAopxcw8A2F05cWo3kQspQ1d2a-pauRoR38LyeRpKqkkb6-WDj1p7Wy_Uk4AIlkVnqV2hNSV65qZjJasbDdS9DvRK0hdbSTJZCwpj7WW8GDotXr5jvHGzNv95OlVf1_LG-l_xK70_p2d-3_3F39Q9c4BDG7gEAAA&amp;sa=X&amp;ved=2ahUKEwiH6vCZo8qAAxW7xjgGHUzzC5EQ7fAIegUIABCBAg"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ketogenic diet
              </a>
              <p className="text-wrapper-3">
                The ketogenic diet is a high-fat, adequate-protein, low-carbohydrate dietary therapy that in
                conventional medicine is used mainly to treat hard-to-control epilepsy in children.
              </p>
            </div>
            <div className="field-row-wrapper-3">
              <div className="field-text-2">Intermittent fasting</div>
              <p className="p">
                Intermittent fasting is any of various meal timing schedules that cycle between voluntary fasting and
                non-fasting over a given period.
              </p>
            </div>
            <div className="field-row-wrapper-4">
              <div className="field-text-2">Gluten-free diet</div>
              <p className="text-wrapper-3">
                A gluten-free diet is a nutritional plan that strictly excludes gluten, which is a mixture of proteins
                found in wheat, as well as barley, rye, and oats.
              </p>
            </div>
            <div className="field-row-wrapper-3">
              <div className="field-text-2">Veganism</div>
              <p className="text-wrapper-3">
                Veganism is the practice of abstaining from the use of animal product—particularly in diet—and an
                associated philosophy that rejects the commodity status of animals.
              </p>
            </div>
          </div>
          
        </div>
        <Button
          className="button-instance"
          labelClassName="design-component-instance-node"
          property="with-icon"
          size="large"
          state="default"
          text="Save"
          type="primary"
          visible={false}
        />
      </div>
    </div>
  );
};
