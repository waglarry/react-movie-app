import React from 'react'
import { Link } from 'react-router-dom'
import { API_IMG, unavailable } from '../../API/URL'
import './HomeMovieCard.css'

const HomeMovieCard = ({title, released, poster, rate}) => {
  return (
    <Link to={`/overview`} style={{textDecoration: "none"}}>
      <div className='HomeMovieCard'>
      <div className='posterBox'>
        <img className='poster' src={ poster ? API_IMG+poster : unavailable} alt={title} />
        <span className='rate'>Rated - {rate.toFixed(1)}</span>
      </div>
      <div className='details'>
        <h4 className='title'>{title}</h4>
        <span className='date'>Released: {released}</span>
      </div>
    </div>
    </Link>
  )
}

export default HomeMovieCard