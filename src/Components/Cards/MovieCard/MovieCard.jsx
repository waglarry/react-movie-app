import React from 'react'
import './MovieCard.css'
import { API_IMG } from '../../API/URL'

const MovieCard = ({title, released, overview, poster, rate, wallpaper, name, known_for}) => {
  return (
    <div className='movieCard'>
      <div className='posterBox'>
        <img className='poster' src={API_IMG+poster} alt="" />
        {/* <span className='overview'>{overview}</span> */}
        <span className='rate'>Rating {rate.toFixed(1)}</span>
      </div>
      <div className='details'>
        <h4 className='title'>{title}</h4>
        <span className='date'>Released: {released}</span>
      </div>
    </div>
  )
}

export default MovieCard