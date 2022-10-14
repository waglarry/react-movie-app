import React from 'react'
import { Link } from 'react-router-dom'
import { API_IMG, unavailable } from '../../API/URL'
import '../MovieCard/MovieCard.css'

const PeopleCard = ({name, known_for, poster}) => {
  return (
    <div className='movieCard'>
    <div className='posterBox'>
      <img className='poster' src={ poster ? API_IMG+poster : unavailable} alt="" />
      <div className='overview'><span><Link to={`/overview`}><button className='posterViewBtn'>View</button></Link></span></div>
    </div>
    <div className='details'>
      <h4 className='title'>{name}</h4>
      <span className='date'>Known for {known_for}</span>
    </div>
  </div>
  )
}

export default PeopleCard