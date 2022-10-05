import React from 'react'
import GetMovieContent from '../../API/GetMovieContent'

const Movies = () => {
  return (
    <div>
      <GetMovieContent content={'movie'} contentTitle={'Movies'} filter={['Popular','Now Playing', 'Upcoming', 'Top Rated']} />
    </div>
  )
}

export default Movies