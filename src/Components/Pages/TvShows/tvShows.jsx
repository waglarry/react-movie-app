import React from 'react'
import GetMovieContent from '../../API/GetMovieContent'
import Footer from '../../Footer/Footer'

const tvShows = () => {
  return (
    <div>
      <GetMovieContent content={'tv'} contentTitle={'Tv Shows'} filter={['Popular','Airing Today', 'On Tv', 'Top Rated']} />
      <Footer />
    </div>
  )
}

export default tvShows
