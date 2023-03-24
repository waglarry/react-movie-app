import React from 'react'
import Footer from '../../../Footer/Footer'
import '../../HowTo/HowToStyleSheet.css'

const HowToDownload = () => {
  return (
    <>
        <div className='mainStepDiv'>
            <h1 className='stepHeaderText'>How To Download</h1>
            <div className='stepsDiv'>
                <p className='stepText'>Step 1: Click on the view button on a movie card to go to the overview page. or <br /> 
                    Click on the Overview link in the footer to go to the overview page.
                </p>
                <div className='stepImageBox'>
                    <img src="/HowToImages/downloadStep0.png" alt="Overview Link" />
                </div>
            </div>
            <div className='stepsDiv'>
                <p className='stepText'>Step 2: Click on the download button of your selected movie.</p>
                <div className='stepImageBox'>
                    <img src="/HowToImages/downloadStep1.png" alt="Download Button Image" />
                </div>
            </div>
            <div className='stepsDiv'>
                <p className='stepText'>Step 3: Select the first Sabishare link from google search results.</p>
                <div className='stepImageBox'>
                    <img src="/HowToImages/downloadStep2.png" alt="Google page with search results" />
                </div>
            </div>
            <div className='stepsDiv'>
                <p className='stepText'>Step 4: From Sabishare page, click on the download button.</p>
                <div className='stepImageBox'>
                    <img src="/HowToImages/downloadStep3.png" alt="Sabishare Page Image" />
                </div>
            </div>
            <div className='stepsDiv'>
                <p className='stepText'>Step 5: Success! Your file is being downloaded.</p>
                <div className='stepImageBox'>
                    <img src="/HowToImages/downloadStep4.png" alt="Sabishare Page Image" />
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default HowToDownload
