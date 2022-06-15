// gallery
import React, { useState } from "react";
import { useEffectOnce } from "./hooks/useEffectOnce";

import "./App.css";

// components
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffectOnce(async () => {
    let list = await Tmdb.getHomeList();
    console.log(list);
    setMovieList(list);
  });

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

export default App;