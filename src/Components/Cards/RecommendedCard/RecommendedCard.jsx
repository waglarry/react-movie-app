import React from 'react'
import { Link } from 'react-router-dom'
import { API_IMG, unavailable } from '../../API/URL'
import './RecommendedCard.css'

const RecommendedCard = ({title, wallpaper}) => {
  return (
    <Link to={`/overview`} className="cardLinks">
    <div className='RecommendedMovieCard'>
    <div className='posterBox'>
      <img className='poster' src={ wallpaper ? API_IMG+wallpaper : unavailable} alt={title} />
      <div className='overview'><p>{title}</p></div>
    </div>
  </div>
  </Link>
  )
}

export default RecommendedCard