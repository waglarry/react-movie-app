import React, { useState } from "react";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { API_KEY } from "./URL";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Spinner from "../Spinner/Spinner";
import ErrorIcon from "../ErrorIcon/ErrorIcon";
import Genres from "../Genres/Genres";
import RenderMovies from "./RenderMovies/RenderMovies";
import PaginationButton from "../PaginationButton/PaginationButton";

const GetMovieContent = ({ content, contentTitle, filter }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [isDisabled, setDisabled] = useState(false);
  const [movieFilter, setMovieFilter] = useState("popular");
  const [movies, setMovies] = useState({});
  const [searchKeyword, setSearchKeyword] = useState("")
  const [selectedGenres, setSelectedGenres] = useState([])

  if(selectedGenres.length > 2){
    selectedGenres.splice(0,selectedGenres.length)
  }

  const { isLoading, isError, isFetching } = useQuery(
    ["content", currentPageNumber, movieFilter, selectedGenres],
    () => {
      return Axios.get(
        `https://api.themoviedb.org/3/${content}/${movieFilter}?api_key=${API_KEY}&language=en-US&page=${currentPageNumber}&with_genres=${selectedGenres}`,
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
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const previousPage = () => {
    setCurrentPageNumber(currentPageNumber - 1);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const searchMovie = async (event) =>{
    if(event.key==="Enter"){
      try {
        setSearchKeyword("");
        const {data} = await Axios.get(`https://api.themoviedb.org/3/search/${content}?api_key=${API_KEY}&query=${searchKeyword}`)
        setMovies(data)
      } catch (error) {
        console.log(error);
      }
    }
  }

  const backgroundImage = (content) => {
    switch(content){
      case "movie":
        return "MoviePageTopContent"
      case "tv": 
        return "TvShowsPageTopContent"
      default:
        return ""
    }
  }


  return (
    <div>
      <div className={backgroundImage(content)}>
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
                      }}>
                      {filt}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <form className="navSearchBox"       
                onSubmit={(event) => {
                event.preventDefault();
              }}>
              <input className="textBox" type="text" placeholder="Search" onChange={(e) => {setSearchKeyword(e.target.value)}} value={searchKeyword} onKeyPress={searchMovie}/>
              <button className="searchBtn">
                <FaSearch />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="ControlsTopDiv">
        <div className="genresDiv">
          <Genres setSelectedGenres={setSelectedGenres} />
        </div>
        <div className="topButtons">
        <button
          type="button"
          className="topButton"
          disabled={currentPageNumber === 1 ? !isDisabled : isDisabled}
          onClick={previousPage}
        >
          &#60;
        </button>
        <button
          type="button"
          className="topButton"
          disabled={
            currentPageNumber !== movies.total_pages ? isDisabled : !isDisabled
          }
          onClick={nextPage}
        >
          &#62;
        </button>
        </div>
      </div>
      <div className="mainContentBox">
        <div className="contentBox">
          {movies ? <RenderMovies movies={movies} content={content} /> : null}
        </div>
      </div>
        <PaginationButton
          previousPage={previousPage}
          nextPage={nextPage}
          currentPageNumber={currentPageNumber}
          isDisabled={isDisabled}
          movies={movies}
          setDisabled={setDisabled}
        />
      {isFetching ? <span> Loading...</span> : null}{" "}
    </div>
  );
};

export default GetMovieContent;
