import React from 'react'
import GetMovieContent from '../../API/GetMovieContent'
import NavPage from '../TopMainPages/NavPage/NavPage'

const Movies = () => {
  return (
    <div>
      <div className="MoviePageTopContent">
        <NavPage contentTitle={'Movies'} filter={['Popular','Now Playing', 'Upcoming', 'Top Rated']}/>
      </div>
      <GetMovieContent content={'movie'} filter={'popular'} />
    </div>
  )
}

export default Movies