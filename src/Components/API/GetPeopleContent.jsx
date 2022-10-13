import React, { useState } from "react";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import PeopleCard from '../Cards/PeopleCard/PeopleCard';
import { API_KEY } from './URL';
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Spinner from "../Spinner/Spinner";
import ErrorIcon from "../ErrorIcon/ErrorIcon";
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import PaginationButton from "../PaginationButton/PaginationButton";

const GetPeopleContent = ({content, contentTitle, filter}) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [isDisabled, setDisabled] = useState(false);
  const [movieFilter, setMovieFilter] = useState("popular");
  const [people, setPeople] = useState({});
  const [searchKeyword, setSearchKeyword] = useState("")

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
            setPeople(data)
          } catch (error) {
            return <h1>{error}</h1>
          }
        }
      }
      
  return (
    <div>
        <div
        className="PeoplePageTopContent">
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
        <div>
          There are no genres
        </div>
        <div>
        <button
          type="button"
          className="topButton"
          disabled={currentPageNumber === 1 ? !isDisabled : isDisabled}
          onClick={previousPage}
        >
          <GrFormPrevious />
        </button>
        <button
          type="button"
          className="topButton"
          disabled={
            currentPageNumber !== people.total_pages ? isDisabled : setDisabled(!isDisabled)
          }
          onClick={nextPage}
        >
          <GrFormNext />
        </button>
        </div>
      </div>
    <div className="mainContentBox">
      <div className="contentBox">
        {people.results === 0 ? <p>No data</p> : people.results && people.results.map((e) => (
          <PeopleCard
            key={e.id}
            poster={e.profile_path}
            name={e.name}
            known_for={e.known_for_department}
        />
        ))}
      </div>
    </div>
    <PaginationButton
          previousPage={previousPage}
          nextPage={nextPage}
          currentPageNumber={currentPageNumber}
          isDisabled={isDisabled}
          movies={people}
          setDisabled={setDisabled}
        />
      {isFetching ? <span> Loading...</span> : null}{" "}
  </div>
  )
}

export default GetPeopleContent