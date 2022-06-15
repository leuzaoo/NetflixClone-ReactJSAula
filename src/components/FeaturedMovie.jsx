import React from "react";
import "./FeaturedMovie.css";
import { ImInfo } from "react-icons/im";

export default ({ item }) => {
  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroudPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average} Pontos</div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--seasons">
              {item.number_of_seasons} Temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </div>
          </div>
          <div className="featured--description">{item.overview}</div>
          <div className="featured--genres">
            <strong>Gênero:</strong> {genres.join(", ")}
          </div>
          <div className="featured--buttons">
            <a className="watch--button" href={`/watch/${item.id}`}>
              ► Assistir
            </a>
            <a className="info--button" href={`/list/add/${item.id}`}>
              <ImInfo className="info-icon" /> Mais Info
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
