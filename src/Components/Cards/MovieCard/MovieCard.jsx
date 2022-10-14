import React from 'react'
import './MovieCard.css'
import { API_IMG, unavailable } from '../../API/URL'
import { Link } from 'react-router-dom'

const MovieCard = ({title, released, poster, rate}) => {
  return (
    <div className='movieCard'>
      <div className='posterBox'>
        <img className='poster' src={ poster ? API_IMG+poster : unavailable} alt={title} />
        <div className='overview'><Link to={`/overview`}><button className='posterViewBtn'>View</button></Link></div>
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