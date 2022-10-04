import React from 'react'
import GetMovieContent from '../../API/GetMovieContent'
import MoviePage from '../TopMainPages/MoviePage/MoviePage'

const Movies = () => {
  return (
    <div>
      <MoviePage />
      <GetMovieContent content={'movie'} filter={'popular'} />
    </div>
  )
}

export default Movies