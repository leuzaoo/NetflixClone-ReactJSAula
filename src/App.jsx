// gallery
import React, { useState } from "react";
import { useEffectOnce } from "./hooks/useEffectOnce";

import "./App.css";

// components
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffectOnce(async () => {
    let list = await Tmdb.getHomeList();
    setMovieList(list);

    let originals = list.filter((i) => i.slug === "originals");
    let randomChosen = Math.floor(
      Math.random() * (originals[0].items.results.length - 1)
    );
    let chosen = originals[0].items.results[randomChosen];
    let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
    setFeaturedData(chosenInfo);
  });

  return (
    <div className="page">
      <Header />

      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

export default App;
