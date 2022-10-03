import React from 'react'
import { API_IMG, unavailable } from '../../API/URL'
import '../MovieCard/MovieCard.css'

const PeopleCard = ({name, known_for, poster}) => {
  return (
    <div className='movieCard'>
    <div className='posterBox'>
      <img className='poster' src={ poster ? API_IMG+poster : unavailable} alt="" />
    </div>
    <div className='details'>
      <h4 className='title'>{name}</h4>
      <span className='date'>Known for {known_for}</span>
    </div>
  </div>
  )
}

export default PeopleCard