import React from 'react'
import GetMovieContent from '../../API/GetMovieContent'

const tvShows = () => {
  return (
    <div>
      <GetMovieContent content={'tv'} contentTitle={'Tv Shows'} filter={['Popular','Airing Today', 'On Tv', 'Top Rated']}  />
    </div>
  )
}

export default tvShows