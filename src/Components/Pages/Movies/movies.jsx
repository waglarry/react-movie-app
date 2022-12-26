import React from 'react'
import GetMovieContent from '../../API/GetMovieContent'
import Footer from '../../Footer/Footer'
import GoogleAds from '../../GoogleAds';

const Movies = () => {
  return (
    <div>
      <GoogleAds slot="5497875310" />
      <GoogleAds slot="1424221759" />
      <GetMovieContent content={'movie'} contentTitle={'Movies'} filter={['Popular','Now Playing', 'Upcoming', 'Top Rated']} />
      <GoogleAds slot="5497875310" />
      <GoogleAds slot="1424221759" />
      <Footer />
        <GoogleAds slot="5497875310" />
    </div>
  )
}

export default Movies
