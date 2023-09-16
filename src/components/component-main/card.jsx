import React from "react";

import './main-styles/card.styles.css';

export const Card = function ({data}) {
    return (
        <div data-testid="movie-card">
          <div data-testid="movie-poster">
            <img src={`https://image.tmdb.org/t/p/original/${data.name.poster_path}`} alt={data.name.original_title} className="card-poster"/>
          </div>
          <div data-testid="movie-title"> {data.name.title} </div>
          <div data-testid="movie-release-date"> {data.name.release_date} </div>
        </div>
    )
}



// this component is responsible for defining the cards