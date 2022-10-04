import React from 'react'
import { API_IMG, unavailable } from '../../API/URL'

const HomeMovieCard = ({title, released, overview, poster, rate}) => {
  return (
    <div className='HomeMovieCard'>
      <div className='HomePosterBox'>
        <img 
          className='poster' 
          src={ poster ? API_IMG+poster : unavailable} 
          alt={title} 
           />
        <span className='rate'>Rating - {rate}</span>
      </div>
      <div className='details'>
        <h4 className='title'>{title}</h4>
        <span className='date'>Released: {released}</span>
      </div>
    </div>
  )
}

export default HomeMovieCard