import React from 'react'
import Footer from '../../../Footer/Footer'

const HowToWatchTrailer = () => {
  return (
    <>
        <div className='mainStepDiv'>
            <h1 className='stepHeaderText'>How To Watch Trailer</h1>
            <div className='stepsDiv'>
                <p className='stepText'>Step 1: Click on the view button on a movie card to go to the overview page. or <br /> 
                    Click on the Overview link in the footer to go to the overview page.
                </p>
                <div className='stepImageBox'>
                    <img src="/HowToImages/downloadStep0.png" alt="Overview Link" />
                </div>
            </div>
            <div className='stepsDiv'>
                <p className='stepText'>Step 2: Click on the watch trailer button of your selected movie.</p>
                <div className='stepImageBox'>
                    <img src="/HowToImages/watchTrailerStep1.png" alt="Watch Trailer Button Image" />
                </div>
            </div>
            <div className='stepsDiv'>
                <p className='stepText'>Step 3: Success! Enjoy your video. <br /> 
                 You can close the video tab at any time of your choice.</p>
                <div className='stepImageBox'>
                    <img src="/HowToImages/watchTrailerStep2.png" alt="Watch Trailer Video" />
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default HowToWatchTrailer