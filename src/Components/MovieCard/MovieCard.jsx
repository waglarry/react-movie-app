import React from 'react'
import './MovieCard.css'
import { API_IMG } from '../API/URL'

const MovieCard = ({title, released, overview, poster, rate, wallpaper}) => {
  return (
    <div className='movieCard'>
      <img className='poster' src={API_IMG+poster} alt="" />
      <div className='details'>
        <h4 className='title'>Title: {title}</h4>
        <span className='date'>Released: {released}</span>
      </div>
    </div>
  )
}

export default MovieCard