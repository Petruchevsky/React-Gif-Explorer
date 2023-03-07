import React, { useEffect, useState } from "react";
import "./GifGrid.css";
import GifItem from './GifItem';
import 'animate.css'

function GifGrid({ category }) {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const fetchGifs = async () => {
      const apiKey = "To5feqqsom73Cg6SgLHTPknvcczh9tWK";
      const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
        category
      )}&limit=9&api_key=${apiKey}`;
      const response = await fetch(url);
      const { data } = await response.json();
      const gifs = data.map( ({ id, title, images }) => ({ id, title, url: images?.downsized_medium.url }));
      setGifs(gifs);
    };
    fetchGifs();
  }, [category]);

  return (
    <div className="gifGrid">
      <h3 className="animate__heartBeat"> {category} </h3>
      <div className="gifsContainer">
        {gifs.map( (gif) => ( <GifItem key={ gif.id } gif={ gif } /> ))}
        </div>
        <hr />
    </div>
  );
}

export default GifGrid;
