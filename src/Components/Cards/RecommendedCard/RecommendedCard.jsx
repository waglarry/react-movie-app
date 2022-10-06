import React from 'react'
import { API_IMG, unavailable } from '../../API/URL'
import './RecommendedCard.css'

const RecommendedCard = ({title, wallpaper}) => {
  return (
    <div className='RecommendedMovieCard'>
    <div className='posterBox'>
      <img className='poster' src={ wallpaper ? API_IMG+wallpaper : unavailable} alt={title} />
      <div className='overview'><p>{title}</p></div>
    </div>
  </div>
  )
}

export default RecommendedCard