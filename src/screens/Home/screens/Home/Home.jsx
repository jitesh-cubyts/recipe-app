import React from "react";
import { Field } from "../../components/Field";
import { IconGeneralArrow } from "../../components/IconGeneralArrow";
import { IconGeneralPlay } from "../../components/IconGeneralPlay";
import { IconNav } from "../../components/IconNav";
import { IconNavBookmark } from "../../components/IconNavBookmark";
import { IconNavProfile } from "../../components/IconNavProfile";
import { NavBarMenu } from "../../components/NavBarMenu";
import "./style.css";
import icon1 from "../../img/food-photo-2.png";
import icon2 from "../../img/food-photo-1.png";
import icon from "../../img/food-photo.png";
import unionArrow from "../../img//union-19.svg";
import imageVideo from "../../img//union-19.svg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <div className="div">
        <div className="search-field">
          <Field
            className="field-instance"
            iconGeneralSearchIconGeneralSearch="/img/icon-general-search-5.svg"
            properties="with-icon"
            size="large"
            state="default"
            text="Search recipes by name"
            type="primary"
          />
        </div>
        <div className="group">
          <div className="overlap-group">
            <Link to={"/customization"}>
              <div className="text-wrapper">Recipe from scratch</div>
            </Link>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-group">
            <div className="text-wrapper-2">I have some ingredients</div>
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <div className="text-wrapper-3">I’m feeling lucky</div>
          </div>
        </div>
        <div className="recent">
          <div className="cards">
            <div className="card">
              <img className="food-photo" alt="Food photo" src={icon1} />
              <div className="info">
                <p className="food-title">How to make seafood fried r...</p>
              </div>
            </div>
            <div className="card-2">
              <img className="food-photo-2" alt="Food photo" src={icon2} />
              <div className="food-title-wrapper">
                <div className="food-title-2">
                  Home made
                  <br />
                  cute pancake
                </div>
              </div>
            </div>
            <div className="card-3">
              <img className="food-photo-2" alt="Food photo" src={icon} />
              <div className="food-title-wrapper">
                <div className="food-title-2">
                  Indonesian
                  <br />
                  chicken burger
                </div>
              </div>
            </div>
          </div>
          <div className="navigation">
            <div className="recent-recipe-title">Recent recipes</div>
            <div className="see-all-button">
              <div className="see-all-label">See all</div>
              <IconGeneralArrow
                className="icon-general-arrow-right"
                union={unionArrow}
                unionClassName="icon-general-arrow-instance"
              />
            </div>
          </div>
        </div>
        <div className="trending">
          <div className="cards-2">
            <div className="card-4">
              <div className="title">Breakfast Waffles</div>
              <div className="video">
                <div className="play-button">
                  <IconGeneralPlay
                    className="icon-general-play-instance"
                    iconGeneralPlay="/img/icon-general-play-2.svg"
                  />
                </div>
                <div className="duration">
                  <div className="label-2">15:10</div>
                </div>
              </div>
              <div className="icon-general-more">
                <img className="union-5" alt="Union" src="/img/union-18.svg" />
              </div>
            </div>
            <div className="card-5">
              <div className="title">New your cheesecake</div>
              <div className="video-2">
                <img
                  className="image-video"
                  alt="Image video"
                  src={imageVideo}
                />
                <div className="play-button">
                  <IconGeneralPlay
                    className="design-component-instance-node"
                    iconGeneralPlay="/img/union-17.png"
                  />
                </div>
                <div className="duration">
                  <div className="label-2">15:10</div>
                </div>
                <img
                  className="bookmark"
                  alt="Bookmark"
                  src="/img/union-17.png"
                />
              </div>
              <div className="union-wrapper">
                <img className="union-6" alt="Union" src="/img/union-17.png" />
              </div>
            </div>
          </div>
          <div className="category-title">Saved recipes</div>
          <div className="see-all-button-2">
            <div className="see-all-label">See all</div>
            <IconGeneralArrow
              className="icon-general-arrow-right"
              union={unionArrow}
              unionClassName="icon-general-arrow-instance"
            />
          </div>
        </div>
        <div className="nav-bar">
          <div className="frame">
            <NavBarMenu className="nav-bar-menu-instance" state="active" />
            <NavBarMenu
              className="nav-bar-menu-instance"
              override={
                <IconNavBookmark className="design-component-instance-node-2" />
              }
              state="inactive"
            />
            <NavBarMenu
              className="nav-bar-menu-instance"
              override={
                <IconNav
                  className="design-component-instance-node-2"
                  union="/img/union-13.svg"
                />
              }
              state="inactive"
            />
            <NavBarMenu
              className="nav-bar-menu-instance"
              override={
                <IconNavProfile
                  className="design-component-instance-node-2"
                  union="/img/union-12.svg"
                />
              }
              state="inactive"
            />
          </div>
        </div>
        <div className="text-wrapper-4">Find something new</div>
      </div>
    </div>
  );
};
