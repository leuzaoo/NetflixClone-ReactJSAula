// gallery
import React, { useEffect, useState } from "react";
import "./App.css";

// components
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    };

    loadAll();
  });

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} item={item.items}/>
        ))}
      </section>
    </div>
  );
}

export default App;
