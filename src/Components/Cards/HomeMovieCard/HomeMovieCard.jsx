import React from 'react'
import { Link } from 'react-router-dom'
import { API_IMG, unavailable } from '../../API/URL'
import './HomeMovieCard.css'

const HomeMovieCard = ({title, released, poster, rate, content}) => {
  return (
    <Link to={content === "tv" ? `/tvshows` : `/movies`} className="cardLinks">
      <div className="HomeMovieCard">
        <div className="posterBox">
          <img
            className="poster"
            src={poster ? API_IMG + poster : unavailable}
            alt={title}
          />
          <span className="rate">Rated - {rate.toFixed(1)}</span>
        </div>
        <div className="details">
          <h4 className={title.length > 25 ? "smallTitle" : "title"}>
            {title}
          </h4>
          <span className="date">Released: {released}</span>
        </div>
      </div>
    </Link>
  );
}

export default HomeMovieCard