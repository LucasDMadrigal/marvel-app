import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [comics, setComics] = useState(null);
  const [characters, setCharacters] = useState("");
  const [comicsOffsets, setComicsOffsets] = useState(null);
  const [charactersOffsets, setCharactersOffsets] = useState(null);

  const getComics = async () => {
    await axios({
      method: "get",
      url: `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=b05cbbb0285da6059769887750ce187a&hash=c8acb4b263746c150696316020bfddf7&offset=${comicsOffsets}`,
    }).then((response) => {
        const {data} = response.data
      setComics(data.results);
    });
  };

  const getCharacters = async () => {
    await axios({
      method: "get",
      url: `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=b05cbbb0285da6059769887750ce187a&hash=c8acb4b263746c150696316020bfddf7&offset=${charactersOffsets}`,
    }).then((response) => {
        const {data} = response.data
        setCharacters(data.results);
    });
  };

  useEffect(() => {
    getComics();
    getCharacters();
  }, []);
  return (
    <DataContext.Provider
      value={{ comics, characters, setComicsOffsets, setCharactersOffsets }}
    >
      {children}
    </DataContext.Provider>
  );
};
