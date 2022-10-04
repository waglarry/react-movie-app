import React from 'react'
import GetMovieContent from '../../API/GetMovieContent'

const tvShows = () => {
  return (
    <div>
      <br /><br /><br /><br /><br /><br /><br /><br />
      Tv Shows
      <GetMovieContent content={'tv'} filter={'popular'} />
    </div>
  )
}

export default tvShows