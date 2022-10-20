import React from 'react'
import { API_IMG, unavailable } from '../../API/URL'

const OverviewCard = ({movie, selectCard}) => {
    const setOverviewContent = () => {
        selectCard(movie)
        window.scroll(0, 0)
    }

    return (
  <div className='movieCard'>
    <div className='posterBox' onClick={setOverviewContent}>
      <img className='poster' src={movie ? API_IMG+movie.poster_path  : unavailable} alt={movie.title || movie.name ? movie.title || movie.name : ""} />
      <span className='rate'>Rated - {movie.vote_average ? movie.vote_average.toFixed(1) : ""}</span>
    </div>
    <div className='details'>
      <h4 className='title'>{movie ? movie.title || movie.name : ""}</h4>
      <span className='date'>Released: {movie.first_air_date || movie.release_date || movie.known_for_department ? movie.first_air_date || movie.release_date || movie.known_for_department : ""}</span>
    </div>
  </div>
  )
}

export default OverviewCard