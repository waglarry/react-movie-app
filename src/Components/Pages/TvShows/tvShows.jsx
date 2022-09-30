import React from 'react'
import GetTvshowsData from '../../API/GetTvshowsData'

const tvShows = () => {
  return (
    <div>
      <GetTvshowsData />
    </div>
  )
}

export default tvShows