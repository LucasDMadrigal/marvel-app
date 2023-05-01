import React, { useEffect, useState } from "react";
import "./styles/HomeCard.css";
import Stripes from "./assets/images/stripes.svg";
const HomeCard = ({ title, alignTitle, backgroundImage }) => {
  const [mainImage, setMainImage] = useState();
  // console.log("🚀 ~ file: HomeCard.jsx:6 ~ HomeCard ~ mainImages:", title, mainImage)
  console.log("🚀 ~ file: HomeCard.jsx:5 ~ HomeCard ~ backgroundImage:", title, backgroundImage)
  console.log("🚀 ~ file: HomeCard.jsx:5 ~ HomeCard ~ backgroundImage:", title, typeof backgroundImage)
  
  
  useEffect(() => {
    if (backgroundImage !== undefined) {
    //   if (title === "characters") {
        // const obj = backgroundImage
        console.log("🚀 ~ file: HomeCard.jsx:13 ~ useEffect ~ backgroundImage.path:", backgroundImage.path)
        console.log("🚀 ~ file: HomeCard.jsx:13 ~ useEffect ~ backgroundImage.extension:", backgroundImage.extension)

        setMainImage(`${backgroundImage.path}.${backgroundImage.extension}`)
      }
    // }

  }, [backgroundImage]);
  return (
    <div className="home-card">
      <div className={`home-card--header ${alignTitle}`}>
        <h1>{title}</h1>
        <picture className="stripes--container">
          <img src={Stripes} alt="stripes" />
        </picture>
      </div>
      <div className="home-card--body">
        <picture className="image-home_card--container">
          <img src={mainImage} alt="home-card-image" />
        </picture>
      </div>
    </div>
  );
};

export default HomeCard;
