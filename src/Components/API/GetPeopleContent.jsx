import React, { useState } from "react";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import PeopleCard from '../Cards/PeopleCard/PeopleCard';
import { API_KEY } from './URL';
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Spinner from "../Spinner/Spinner";
import ErrorIcon from "../ErrorIcon/ErrorIcon";

const GetPeopleContent = ({content, contentTitle, filter}) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [isDisabled, setDisabled] = useState(false);
  const [movieFilter, setMovieFilter] = useState("popular");
  const [people, setPeople] = useState({});

  const { isLoading, isError, isFetching } = useQuery(
    ["content", currentPageNumber, movieFilter],
    () => {
      return Axios.get(
        `https://api.themoviedb.org/3/${content}/${movieFilter}?api_key=${API_KEY}&language=en-US&page=${currentPageNumber}`,
        { keepPreviousData: true }
      ).then((response) => response.data);
    },
    { onSuccess: setPeople }
  );

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorIcon />;

      const setMovieType = (movieType) => {
          setMovieFilter(movieType.toLowerCase());
      };

      const nextPage = () => {
        setCurrentPageNumber(currentPageNumber + 1);
        // window.scroll(0,0)
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      };
    
      const previousPage = () => {
        setCurrentPageNumber(currentPageNumber - 1);
        // window.scroll(0,0)
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      };
      
  return (
    <div>
        <div
        className="TopPageBG"
        style={{
          backgroundColor: "#ccc",
        }}
      >
        <div className="NavTopPage">
          <h1 className="contentTitle">{contentTitle}</h1>
          <div className="contentDetails">
            <ul className="filterControls">
              {filter.map((filt, id) => {
                return (
                  <li className="filter" key={id}>
                    <Link
                      to=""
                      className="filterLink"
                      name={filt}
                      onClick={(e) => {
                        setMovieType(e.target.name);
                      }}
                    >
                      {filt}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="navSearchBox">
              <input className="textBox" type="text" placeholder="Search" />
              <button className="searchBtn">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ControlsTopDiv">
        <button
          type="button"
          className="topButton"
          disabled={currentPageNumber === 1 ? !isDisabled : isDisabled}
          onClick={previousPage}
        >
          Previous
        </button>
        <button
          type="button"
          className="topButton"
          disabled={
            currentPageNumber !== people.total_pages ? isDisabled : setDisabled(!isDisabled)
          }
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    <div className="mainContentBox">
      <div className="contentBox">
        {people.results && people.results.map((e) => (
          <PeopleCard
            key={e.id}
            poster={e.profile_path}
            name={e.name}
            known_for={e.known_for_department}
        />
        ))}
      </div>
    </div>
    <div className="paginationControl">
        <button
          type="button"
          className="downButton"
          disabled={currentPageNumber === 1 ? !isDisabled : isDisabled}
          onClick={previousPage}
        >
          Previous
        </button>
        <span className="CurrentPageNumber">{currentPageNumber}</span>
        <button
          type="button"
          className="downButton"
          disabled={
            currentPageNumber !== people.total_pages ? isDisabled : !isDisabled
          }
          onClick={nextPage}
        >
          Next
        </button>
      </div>
      {isFetching ? <span> Loading...</span> : null}{" "}
  </div>
  )
}

export default GetPeopleContent