import React, { useState } from "react";
import "./MovieRow.css";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

export default ({ title, items }) => {
  const [scrollX, setScrollX] = useState(-400);

  const handleLeftArrow = () => {
    let x = scrollX + 150;
    if (x > 0) {
      x = 0;
    }

    setScrollX(x);
  };

  const handleRightArrow = () => {};

  return (
    <div className="movie-row">
      <h2>{title}</h2>

      <div className="movieRow--left" onClick={handleLeftArrow}>
        <MdNavigateBefore style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--right" onClick={handleRightArrow}>
        <MdNavigateNext style={{ fontSize: 50 }} />
      </div>
      <div
        className="movieRow--listarea"
        style={{
          marginLeft: scrollX,
          width: items.results.length * 225,
        }}
      >
        <div className="movieRow--list">
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movieRow--item">
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
