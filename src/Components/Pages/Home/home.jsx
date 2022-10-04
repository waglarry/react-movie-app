import React from 'react'
import GetTopRatedMovies from '../../API/HomeMovieContent/GetTopRatedMovies'
import GetTrendingMovies from '../../API/HomeMovieContent/GetTrendingMovies'
import HomePage from '../TopMainPages/HomePage/HomePage'

const Home = () => {
  return (
    <div>
      <HomePage />
      <GetTrendingMovies />
      <GetTopRatedMovies />
    </div>
  )
}

export default Home