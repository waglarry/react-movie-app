import React from 'react'
import './MovieCard.css'
import { API_IMG, unavailable } from '../../API/URL'

const MovieCard = ({title, released, overview, poster, rate}) => {
  return (
    <div className='movieCard'>
      <div className='posterBox'>
        <img className='poster' src={ poster ? API_IMG+poster : unavailable} alt={title} />
        <div className='overview'>Overview <p>{overview}</p></div>
        <span className='rate'>Rated - {rate.toFixed(1)}</span>
      </div>
      <div className='details'>
        <h4 className='title'>{title}</h4>
        <span className='date'>Released: {released}</span>
      </div>
    </div>
  )
}

export default MovieCard