import React from 'react'
import GetMovieContent from '../../API/GetMovieContent'
import NavPage from '../TopMainPages/NavPage/NavPage'

const tvShows = () => {
  return (
    <div>
      <div className="TvShowsPageTopContent">
        <NavPage contentTitle={'Tv Shows'} filter={['Popular','Airing Today', 'On Tv', 'Top Rated']} />
      </div>
      <GetMovieContent content={'tv'} filter={'popular'} />
    </div>
  )
}

export default tvShows