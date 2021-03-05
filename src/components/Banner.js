import React, { useState, useEffect } from "react";

import "./Banner.css";
import axios from "../axios";
import requests from "../Requests";

const Banner = () => {
  const truncate = (string, n) => {
    return string?.length > n ? string.slice(0, n - 1) + "..." : string;
  };
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    };
    fetchData();
  }, []);
  return (
    <div
      className="banner"
      style={{
        backgroundPosition: "top top",
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <div className="banner__title">
          <h1>{movie?.name || movie?.original_name}</h1>
        </div>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <div className="banner__description">
          {truncate(`${movie?.overview}`, 150)}
        </div>
      </div>
      <div className="banner__fadeBottom"></div>
    </div>
  );
};

export default Banner;
