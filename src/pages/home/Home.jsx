import React from "react";
import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <div className="carousel-opacity-layer"></div>
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
