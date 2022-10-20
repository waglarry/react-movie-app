import React from 'react'
import './MovieCard.css'
import { API_IMG, unavailable } from '../../API/URL'
import { Link } from 'react-router-dom'

const MovieCard = ({title, released, poster, rate}) => {
  return (
    <div className='movieCard'>
      <Link to={`/overview`} className="cardLinks">
      <div className='posterBox'>
        <img className='poster' src={ poster ? API_IMG+poster : unavailable} alt={title} />
        <span className='rate'>Rated - {rate ? rate.toFixed(1) : ""}</span>
      </div>
      <div className='details'>
        <h4 className={title.length > 28 ? 'smallTitle' : 'title'}>{title}</h4>
        <span className='date'>Released: {released}</span>
      </div>
      </Link>
    </div>
  )
}

export default MovieCard