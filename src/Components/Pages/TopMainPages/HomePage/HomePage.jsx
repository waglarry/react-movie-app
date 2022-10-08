import React from "react";
import './HomePage.css'
import GetHomePageBGs from "../../../API/HomeMovieContent/GetHomePageBGs";

const HomePage = () => {
  return (
    <div>
      <GetHomePageBGs content={'movie'} movieFilter={'popular'} />
    </div>
  )
}

export default HomePage