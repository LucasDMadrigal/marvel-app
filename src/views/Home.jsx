import React, { useContext, useEffect, useState } from "react";
import HomeCard from "../components/HomeCard";
import "./styles/Home.css";
import { DataContext } from "../Context/ContextApi";

const Home = () => {
  const { characters, comics } = useContext(DataContext);
  const [backgroundImageComics, setBackgroundImageComics] = useState({});
  const [backgroundImageCharacters, setBackgroundImageCharacters] = useState();

  useEffect(() => {
    if (comics) {
      const img = comics.find((el) => el.images.length > 0);
      setBackgroundImageComics(img.images[0]);
    }
  }, [comics]);

  useEffect(() => {
    if (characters) {
      const img = characters.find((el) => el.hasOwnProperty('thumbnail'));
      setBackgroundImageCharacters(img.thumbnail);
    }
  }, [characters]);

  return (
    <section className="main-section--home">
      <HomeCard
        title="comics"
        alignTitle="align-title--left"
        backgroundImage={backgroundImageComics}
      />
      <HomeCard
        title="characters"
        alignTitle="align-title--right"
        backgroundImage={backgroundImageCharacters}
      />
    </section>
  );
};

export default Home;
