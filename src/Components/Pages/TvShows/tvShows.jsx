import React from 'react'
import GetMovieContent from '../../API/GetMovieContent'
import Footer from '../../Footer/Footer'
import GoogleAds from '../../GoogleAds';

const tvShows = () => {
  return (
    <div>
    <GoogleAds slot="5497875310" />
      <GoogleAds slot="1424221759" />
      <GetMovieContent content={'tv'} contentTitle={'Tv Shows'} filter={['Popular','Airing Today', 'On Tv', 'Top Rated']} />
    <GoogleAds slot="5497875310" />
      <GoogleAds slot="1424221759" />
      <Footer />
        <GoogleAds slot="5497875310" />
    </div>
  )
}

export default tvShows
