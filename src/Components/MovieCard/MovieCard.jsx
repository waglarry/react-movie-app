import React from 'react'
import { API_IMG } from '../API/URL'

const MovieCard = ({title, released, overview, poster, rate, wallpaper}) => {
  return (
    <div>
      <img src={API_IMG+wallpaper} alt="" />
      <h3>Title: {title}</h3>
      <span>Released: {released}</span>
    </div>
  )
}

export default MovieCard