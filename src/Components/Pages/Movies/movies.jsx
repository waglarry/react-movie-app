import React from 'react'
import GetMovieContent from '../../API/GetMovieContent'
import Footer from '../../Footer/Footer'

const Movies = () => {
  return (
    <div>
      <GetMovieContent content={'movie'} contentTitle={'Movies'} filter={['Popular','Now Playing', 'Upcoming', 'Top Rated']} />
      <Footer />
    </div>
  )
}

export default Movies
