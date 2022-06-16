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
    <div id="home" className="page">
      <Header />

      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        <div class="footer card text-center">
          <div class="card-header">
            Desevolvido por Leonardo Costa de Oliveira
          </div>
          <div class="card-body">
            <h5 class="card-title">Netflix Interface</h5>
            <p class="card-text">
              Aplicação desenvolvida para aplicação de conhecimento ReactJS e
              API REST.
            </p>
            <a href="#home" class="btn btn-primary">
              Ir para Filmes
            </a>
          </div>
        </div>
      </footer>

      {movieList.length <= 0 && (
        <div className="loading">
          <img src="https://i.gifer.com/8Etj.gif" alt="carregando" />
        </div>
      )}
    </div>
  );
}

export default App;