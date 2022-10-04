import React from 'react'
import GetMovieContent from '../../API/GetMovieContent'

const Movies = () => {
  return (
    <div>
      <br /><br /><br /><br /><br /><br /><br /><br />
      Movies
      <GetMovieContent content={'movie'} filter={'popular'} />
    </div>
  )
}

export default Movies