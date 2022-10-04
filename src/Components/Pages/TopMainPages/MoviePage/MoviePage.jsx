import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa'

const MoviePage = () => {
  return (
    <section className="MoviePage">
      <div className="pageTopContent">
        <h1 className="contentTitle">Movies</h1>
        <div className="contentDetails">
          <ul className="filterControls">
            <li className="filter">
              <Link to="" className="filterLink">
                Popular
              </Link>
            </li>
            <li className="filter">
            <Link to="" className="filterLink">
                Now Playing
              </Link>
            </li>
            <li className="filter">
            <Link to="" className="filterLink">
                Upcoming
              </Link>
            </li>
            <li className="filter">
            <Link to="" className="filterLink">
                Top Rated
              </Link>
            </li>
          </ul>
          <div className="navSearchBox">
                <input className='textBox' type="text"  placeholder='Search'/>
                <button className='searchBtn'><FaSearch /></button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MoviePage;
