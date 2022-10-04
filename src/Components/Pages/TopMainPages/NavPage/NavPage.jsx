import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const NavPage = ({ contentTitle, filter }) => {
  return (
    <div className="NavTopPage">
        <h1 className="contentTitle">{contentTitle}</h1>
        <div className="contentDetails">
          <ul className="filterControls">
            <li className="filter">
              <Link to="" className="filterLink">
                {filter[0]}
              </Link>
            </li>
            <li className="filter">
              <Link to="" className="filterLink">
                {filter[1]}
              </Link>
            </li>
            <li className="filter">
              <Link to="" className="filterLink">
                {filter[2]}
              </Link>
            </li>
            <li className="filter">
              <Link to="" className="filterLink">
                {filter[3]}
              </Link>
            </li>
          </ul>
          <div className="navSearchBox">
            <input className="textBox" type="text" placeholder="Search" />
            <button className="searchBtn">
              <FaSearch />
            </button>
          </div>
        </div>
    </div>
  );
};

export default NavPage;
