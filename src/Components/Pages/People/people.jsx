import React from 'react'
import GetPeopleContent from '../../API/GetPeopleContent'
import Footer from '../../Footer/Footer'
import GoogleAds from '../../GoogleAds';

const people = () => {
  return (
    <div>
          <GoogleAds slot="5497875310" />
      <GoogleAds slot="1424221759" />
        <GetPeopleContent content={'person'} contentTitle={'People'} filter={['Popular','Latest']} />
     <GoogleAds slot="5497875310" />
      <GoogleAds slot="1424221759" />
        <Footer />
        <GoogleAds slot="5497875310" />
    </div>
  )
}

export default people
