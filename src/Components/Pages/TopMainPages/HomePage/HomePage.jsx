import React from 'react'
import { FaSearch } from 'react-icons/fa'
import './HomePage.css'

const HomePage = () => {
  return (
    <section className='homePage'>
            <div className="homePageBox">
              <div className="coat">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h3>Join the hub to enjoy more...</h3>
              </div>
              <div className="homeSearchBox">
                <input className='textBox' type="text"  placeholder='Search for a movie, tv show, person...'/>
                <button className='searchBtn'><FaSearch /></button>
            </div>
            </div>
    </section>
  )
}

export default HomePage