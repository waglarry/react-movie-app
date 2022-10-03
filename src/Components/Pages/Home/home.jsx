import React from 'react'
import { GetPopularMovies } from '../../API/GetPopularMovies'
import GetTopRatedMovies from '../../API/GetTopRatedMovies'
import GetTrendingMovies from '../../API/GetTrendingMovies'

const Home = () => {
  return (
    <div>
      {/* <GetPopularMovies /> */}
      <GetTrendingMovies />
      <GetTopRatedMovies />
    </div>
  )
}

export default Home