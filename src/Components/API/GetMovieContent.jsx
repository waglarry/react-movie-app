import React, { useState } from "react";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import MovieCard from "../Cards/MovieCard/MovieCard";
import { API_KEY } from "./URL";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import Spinner from "../Spinner/Spinner";
import ErrorIcon from "../ErrorIcon/ErrorIcon";

const GetMovieContent = ({ content, contentTitle, filter }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [isDisabled, setDisabled] = useState(false);
  const [movieFilter, setMovieFilter] = useState("popular");
  const [movies, setMovies] = useState({});
  const [searchKeyword, setSearchKeyword] = useState("")

  const { isLoading, isError, isFetching } = useQuery(
    ["content", currentPageNumber, movieFilter],
    () => {
      return Axios.get(
        `https://api.themoviedb.org/3/${content}/${movieFilter}?api_key=${API_KEY}&language=en-US&page=${currentPageNumber}`,
        { keepPreviousData: true }
      ).then((response) => response.data);
    },
    { onSuccess: setMovies }
  );

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorIcon />;

  const setMovieType = (movieType) => {
    if (movieType === "Now Playing") {
      setMovieFilter("now_playing");
    } else if (movieType === "Upcoming") {
      setMovieFilter("upcoming");
    } else if (movieType === "Top Rated") {
      setMovieFilter("top_rated");
    } else if (movieType === "Airing Today") {
      setMovieFilter("airing_today");
    } else if (movieType === "On Tv") {
      setMovieFilter("on_the_air");
    } else {
      setMovieFilter(movieType.toLowerCase());
    }
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

  const searchMovie = (event) =>{
    if(event.key==="Enter"){
      const { isLoading, isError } = useQuery(
        ["content"],
        () => {
          return Axios.get(
            `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${searchKeyword}`,
            { keepPreviousData: true }
          ).then((response) => response.data);
        },
        { onSuccess: setMovies }
      );
    
      if (isLoading) return <Spinner />;
      if (isError) return <h1>Error...</h1>;
      return (
        setMovies
      )
    }
  }

  // console.log(searchKeyword);

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
              <input className="textBox" type="text" placeholder="Search" onChange={(e) => {setSearchKeyword(e.target.value)}} value={searchKeyword} onKeyPress={searchMovie}/>
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
            currentPageNumber !== movies.total_pages ? isDisabled : !isDisabled
          }
          onClick={nextPage}
        >
          Next
        </button>
      </div>
      <div className="mainContentBox">
        <div className="contentBox">
          {movies.results &&
            movies.results.map((e) => (
              <MovieCard
                key={e.id}
                title={e.title || e.name}
                released={e.first_air_date || e.release_date}
                poster={e.poster_path}
                rate={e.vote_average}
                overview={e.overview}
                wallpaper={e.backdrop_path}
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
          <GrFormPrevious />
        </button>
        <span className="CurrentPageNumber">{currentPageNumber}</span>
        <button
          type="button"
          className="downButton"
          disabled={
            currentPageNumber !== movies.total_pages ? isDisabled : setDisabled(!isDisabled)
          }
          onClick={nextPage}
        >
          <GrFormNext />
        </button>
      </div>
      {isFetching ? <span> Loading...</span> : null}{" "}
    </div>
  );
};

export default GetMovieContent;
