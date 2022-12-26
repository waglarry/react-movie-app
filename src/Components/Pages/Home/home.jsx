import React from 'react'
import GetRecommendedMovieContent from '../../API/HomeMovieContent/GetRecommendedMovieContent'
import HomeScollMovies from '../../API/HomeMovieContent/HomeScollMovies'
import Footer from '../../Footer/Footer';
import GoogleAds from '../../GoogleAds';
import HomePage from '../TopMainPages/HomePage/HomePage'

const Home = () => {
  return (
    <div>
      <HomePage />
      <HomeScollMovies content={'movie'} filter={'popular'} contentTilte={'Popular'} subContentTilte={'Best Popular Movies'} />
      <GoogleAds slot="5497875310" />
      <HomeScollMovies content={'movie'} filter={'top_rated'} contentTilte={'Top Rated'} subContentTilte={'Rate from IMDB'}/>
      <GoogleAds slot="5497875310" />
      <HomeScollMovies content={'tv'} filter={'popular'} contentTilte={'Tv Series'} subContentTilte={'Catching Tv Shows'} />
      <GoogleAds slot="5497875310" />
      <GetRecommendedMovieContent />
      <GoogleAds slot="5497875310" />
      <Footer />
    </div>
  )
}

export default Home
