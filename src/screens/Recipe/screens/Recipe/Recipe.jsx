import React, { useEffect, useState } from "react";
import { IconGeneralArrow } from "../../components/IconGeneralArrow";
import { IconNavBookmark } from "../../components/IconNavBookmark";
import { NavBarMenu } from "../../components/NavBarMenu";
import "./style.css";
import icon2 from "../../img/image-16.png";
import icons from "../../img/food-thumbnail.png";
import iconbulk from "../../img/iconsax-bulk-playcircle.svg";
import un4 from "../../img/union-4.svg";
import un2 from "../../img/union-2.svg";
import un1 from "../../img/union-1.svg";
import video1 from "../../video.mp4";

export const Recipe = () => {
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    const res = fetch(
      "https://307b-2406-7400-56-2de5-be80-1b33-36af-769a.ngrok-free.app/brar/video?file_name='Desi chicken shawar'"
    );

  }, [])

  return (
    <div className="recipe">
      <div className="div-2">
        <div className="overlap">
          <div className="ingredients">
            <header className="header">
              <div className="title">Ingredients</div>
              <div className="servings">
                <div className="label">5 items</div>
              </div>
            </header>
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="tabs">
                  <img className="image" alt="Image" src={icon2} />
                  <div className="text-wrapper">Add to cart</div>
                </div>
                <div className="label-2">200g</div>
                <div className="icon-noodles" />
                <div className="text-wrapper-2">Bread</div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-group-2">
                <div className="tabs">
                  <img className="image" alt="Image" src={icon2} />
                  <div className="text-wrapper">Add to cart</div>
                </div>
                <div className="label-2">200g</div>
                <div className="icon-noodles-2" />
                <div className="text-wrapper-2">Garlic</div>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="overlap-group-2">
                <div className="tabs">
                  <img className="image" alt="Image" src={icon2} />
                  <div className="text-wrapper">Add to cart</div>
                </div>
                <div className="label-2">200g</div>
                <div className="icon-noodles-3" />
                <div className="text-wrapper-2">Lemongrass</div>
              </div>
            </div>
            <div className="overlap-wrapper-2">
              <div className="overlap-group-2">
                <div className="tabs">
                  <img className="image" alt="Image" src={icon2} />
                  <div className="text-wrapper">Add to cart</div>
                </div>
                <div className="label-2">200g</div>
                <div className="icon-noodles-4" />
                <div className="text-wrapper-2">Thai Chilli</div>
              </div>
            </div>
            <div className="overlap-wrapper-3">
              <div className="overlap-group-2">
                <div className="tabs">
                  <img className="image" alt="Image" src={icon2} />
                  <div className="text-wrapper">Add to cart</div>
                </div>
                <div className="label-2">200g</div>
                <div className="icon-noodles-5" />
                <div className="text-wrapper-2">Mushroom</div>
              </div>
            </div>
          </div>
        </div>
        <div className="video">
          <div className="group-2">
            <div className="label-3">Strirred Fried Vegetables</div>
            {!showVideo ? (
              <img
                className="food-thumbnail"
                alt="Food thumbnail"
                src={icons}
                onClick={() => setShowVideo(true)}
                onTouchEnd={() => setShowVideo(true)}
              />
            ) : (
              <video width="350" height="200" controls>
                <source src={video1} type="video/mp4" />
              </video>
            )}
            <div className="frame">
              <img className="iconsax-bulk" alt="Iconsax bulk" src={iconbulk} />
              <div className="text-wrapper-3">0:01 - 0:30</div>
            </div>
            <div className="frame-2">
              <img className="iconsax-bulk" alt="Iconsax bulk" src={iconbulk} />
              <div className="text-wrapper-3">0:30 - 2:00</div>
            </div>
          </div>
        </div>
        <div className="heading">
          <h1 className="h-1">How to make Stirred Fried Vegetables</h1>
          <div className="icon-general-more">
            <img className="union-4" alt="Union" src={un4} />
          </div>
          <NavBarMenu
            className="nav-bar-menu-instance"
            override={
              <IconNavBookmark
                className="icon-nav-bookmark-inactive"
                union={un2}
              />
            }
            state="inactive"
          />
          <IconGeneralArrow className="icon-general-arrow-left" union={un1} />
        </div>
        <div className="frame-3">
          <div className="title-2">Process</div>
          <p className="prepare-stir-fry">
            Prepare stir fry sauce by mixing all the ingredients. Keep aside.
            <br />
            In wok sauté garlic and lemon grass until aroma comes out.
            <br />
            Add all the vegetables and stir on high flame for 2-3 minutes.
            <br />
            Now add stir fry sauce and allow it to boil. Cook the vegetables in
            sauce for 2 minutes and serve immediately.
          </p>
        </div>
      </div>
    </div>
  );
};
