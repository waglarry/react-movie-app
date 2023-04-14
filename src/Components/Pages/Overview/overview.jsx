import React, { useState, useEffect, useRef } from "react";
import { API_BGImage, API_IMG, API_KEY } from "../../API/URL";
import axios from "axios";
import OverviewCard from "../../Cards/OverviewCard/OverviewCard";
import "./overview.css";
import YouTube from "react-youtube";
import { FaSearch } from "react-icons/fa";
import PaginationButton from "../../PaginationButton/PaginationButton";
import Footer from "../../Footer/Footer";
import { AiTwotoneStar } from "react-icons/ai";
import { MdOutlineHowToVote, MdOutlineTagFaces } from "react-icons/md";
import { TbMessageLanguage } from "react-icons/tb";
import ReadMore from "../../ReadMore/ReadMore";
import OverviewPeopleCard from "../../Cards/OverviewPeopleCard/OverviewPeopleCard";
import { TbFaceIdError } from "react-icons/tb";
import Genres from "../../Genres/Genres";
import Spinner from "../../Spinner/Spinner";

const Overview = ({ content }) => {
  const [movies, setMovies] = useState({});
  const [movieFilter, setMovieFilter] = useState("popular");
  const [selectedCard, setSelectedCard] = useState([]);
  const [playTrailer, setPlayTrailer] = useState(false);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [isDisabled, setDisabled] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);

  if (selectedGenres.length > 1) {
    selectedGenres.splice(0, selectedGenres.length);
  }


  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${content}/${movieFilter}?api_key=${API_KEY}&language=en-US&page=${currentPageNumber}&with_genres=${selectedGenres}`
      );
      setMovies(data);
      await selectCard(data.results[0]);
    } catch (error) {
      alert(
        `${error.message}. Please check your internet connection and try again!`
      );
    }
  };

  const fetchMovieById = async (id) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${content}/${id}?api_key=${API_KEY}&append_to_response=videos`
      );
      return data;
    } catch (error) {
      console.log("");
    }
  };


  const selectCard = async (movie) => {
    setPlayTrailer(false);
    const data = await fetchMovieById(movie.id);
    setSelectedCard(data);
  };

  const renderTrailer = (selectedCard) => {
    const trailer = selectedCard.videos.results.find(
      (vid) => vid.name === "Official Trailer"
    );

    if (trailer) {
      const key = trailer ? trailer.key : selectedCard.videos.results[0].key;

      return (
        <div className="VideoContainer">
          <YouTube
            videoId={key}
            className={"youtubeContainer"}
            iframeClassName={"iframeContainer"}
            title={"WagaTrendz"}
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                autoplay: 1,
                // controls: 0
              },
            }}
          />
        </div>
      );
    } else {
      return (
        <div
          style={{
            padding: "20%",
            background: "rgba(204, 204, 204, 0.37)",
          }}
        >
          <p
            style={{
              fontSize: "2.5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TbFaceIdError />
            Video not available.
          </p>
        </div>
      );
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [currentPageNumber, content, movieFilter, selectedGenres]);

  const searchMovie = async (event) => {
    if (event.key === "Enter") {
      try {
        setSearchKeyword("");
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/${content}?api_key=${API_KEY}&query=${searchKeyword}`
        );
        await selectCard(data.results[0]);
        return setMovies(data);
      } catch (error) {
        if (error.message === "Network Error") {
          alert(
            `${error.message}. Please check your internet connection and try again!`
          );
        }else{
          alert(`${searchKeyword} was not found!`)
        }
      }
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

  const SabishareMovieTitle = (selectedCard) => {
    if (selectedCard) {
      let name = selectedCard.original_title || selectedCard.original_name;
      return name;
    }
  };

  const downloadBtns = useRef();

  const showDownloadBtns = () => {
    downloadBtns.current.style.marginTop = "0";
    downloadBtns.current.style.visibility = "visible";
    downloadBtns.current.style.opacity = "1";
  };

  const MovieButtons = () => {
    if (content !== "person") {
      return (
        <>
          <button className="videoBtn" onClick={() => setPlayTrailer(true)}>
            Watch Trailer
          </button>
          <button className="videoBtn downloadBtn" onClick={showDownloadBtns}>
            Download
          </button>
          <div
            ref={downloadBtns}
            style={{
              marginTop: "-3.5rem",
              visibility: "hidden",
              opacity: "0",
              scrollBehavior: "smooth",
            }}
          >
            <br />
            <p>
              <a
                style={{ color: "crimson" }}
                href={`https://www.google.com/search?q=sabishare.com/file/${
                  selectedCard.id
                }-${SabishareMovieTitle(selectedCard)}-netnaija-mkv`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download from Sabishare.com
              </a>
            </p>
            <p style={{ fontSize: "0.9rem" }}>
              NB: The movie is only available to download, if you should see a
              'sabishare.com' link and the title of the movie leading in the
              google search result.
            </p>
          </div>
        </>
      );
    }
  };
  const MovieFilterButtons = () => {
    if (content !== "person") {
      return (
        <>
          <div style={{ maxWidth: "100%" }}>
            <Genres setSelectedGenres={setSelectedGenres} />
          </div>
        </>
      );
    }
  };

  return (
    <>
      {movies.results ? (
        <div
          className="hero"
          style={{
            backgroundImage: `url('${API_BGImage}${
              selectedCard
                ? selectedCard.backdrop_path || selectedCard.profile_path
                : ""
            }')`,
          }}
        >
          {playTrailer ? (
            <button
              className="VideoCloseBtn"
              onClick={() => setPlayTrailer(false)}
            >
              X
            </button>
          ) : null}
          {selectedCard.videos && playTrailer
            ? renderTrailer(selectedCard)
            : null}
          <div className="heroContentBox" id={playTrailer ? "hideContent" : ""}>
            <div className="overViewTopBar">
              <div className="overviewFilterBtns">
                <button
                  onClick={() => setMovieFilter("popular")}
                  id={movieFilter === "popular" ? "activeContent" : ""}
                  className="switchContentBtn"
                >
                  Popular
                </button>
                <button
                  onClick={() => setMovieFilter("top_rated")}
                  id={movieFilter === "top_rated" ? "activeContent" : ""}
                  className="switchContentBtn"
                >
                  Top Rated
                </button>
              </div>
              <form
                className="search"
                id="search"
                onSubmit={(event) => {
                  event.preventDefault();
                }}
              >
                <input
                  type="text"
                  className="overviewSearchInput"
                  placeholder={`Search for your favorite ${
                    content === "tv" ? "tv show" : content
                  }...`}
                  onChange={(e) => {
                    setSearchKeyword(e.target.value);
                  }}
                  value={searchKeyword}
                  onKeyPress={searchMovie}
                />
                <button type="button" className="overviewSearchBtn">
                  <FaSearch />
                </button>
              </form>
            </div>
            <div className="heroContentDetails">
              <div className="heroPoster">
                <img
                  className="poster"
                  src={`${API_IMG}${
                    selectedCard.poster_path || selectedCard.profile_path
                  }`}
                  alt={
                    selectedCard.title ||
                    selectedCard.original_title ||
                    selectedCard.original_name ||
                    selectedCard.name
                  }
                />
              </div>
              <div className="heroContent" id="heroContent">
                <h2>
                  {selectedCard.title ||
                  selectedCard.original_title ||
                  selectedCard.original_name ||
                  selectedCard.name
                    ? selectedCard.title ||
                      selectedCard.original_title ||
                      selectedCard.original_name ||
                      selectedCard.name
                    : ""}
                </h2>
                <p style={{ color: "#ccc" }}>
                  {selectedCard.tagline ? selectedCard.tagline : ""}
                </p>
                {MovieButtons()}

                <div className="overviewInfo">
                  <p className="date">
                    {content !== "person" ? "Release Date: " : "Birthday: "}{" "}
                    {selectedCard.release_date ||
                    selectedCard.first_air_date ||
                    selectedCard.birthday
                      ? selectedCard.release_date ||
                        selectedCard.first_air_date ||
                        selectedCard.birthday
                      : ""}
                  </p>
                  <p className="overviewText">
                    <p className="overviewTitle">
                      {content !== "person" ? "Overview" : "Biography"}
                    </p>
                    <ReadMore>
                      {selectedCard.overview || selectedCard.biography
                        ? selectedCard.overview || selectedCard.biography
                        : ""}
                    </ReadMore>
                  </p>
                  <div className="otherOverviewInfo">
                    <div className="right-col">
                      <p>
                        <MdOutlineTagFaces /> Popularity:{" "}
                        <span>
                          {selectedCard.popularity
                            ? selectedCard.popularity
                            : ""}
                        </span>
                      </p>
                      <p>
                        <AiTwotoneStar />{" "}
                        {content !== "person" ? "Rated: " : "Known for: "}{" "}
                        <span>
                          {selectedCard.vote_average ||
                          selectedCard.known_for_department
                            ? selectedCard.vote_average ||
                              selectedCard.known_for_department
                            : ""}
                        </span>
                      </p>
                      <p>
                        <MdOutlineHowToVote />{" "}
                        {content !== "person"
                          ? "Vote Count: "
                          : "Place of Birth: "}{" "}
                        <span>
                          {selectedCard.vote_count ||
                          selectedCard.place_of_birth
                            ? selectedCard.vote_count ||
                              selectedCard.place_of_birth
                            : ""}
                        </span>
                      </p>
                      <p>
                        <TbMessageLanguage />{" "}
                        {content === "person" ? "" : "Language: "}{" "}
                        <span>
                          {selectedCard.original_language
                            ? selectedCard.original_language
                              ? selectedCard.original_language === "en"
                                ? "English"
                                : selectedCard.original_language
                              : "No language found"
                            : ""}
                        </span>
                      </p>
                      <p>
                        {content !== "tv" ? "" : "Country: "}{" "}
                        <span>
                          {selectedCard.origin_country
                            ? selectedCard.origin_country
                            : ""}
                        </span>
                      </p>
                    </div>
                    <div className="left-col">
                      <p>
                        {content === "person" ? "" : "Status: "}{" "}
                        <span>
                          {selectedCard.status ? selectedCard.status : ""}
                        </span>
                      </p>
                      <p>
                        {content !== "tv" ? "" : "Type: "}{" "}
                        <span>
                          {selectedCard.type ? selectedCard.type : ""}
                        </span>
                      </p>
                      <p>
                        {content !== "tv" ? "" : "Number of Seasons: "}{" "}
                        <span>
                          {selectedCard.number_of_seasons
                            ? selectedCard.number_of_seasons
                            : ""}
                        </span>
                      </p>
                      <p>
                        {content !== "tv" ? "" : "Number of Episodes: "}{" "}
                        <span>
                          {selectedCard.number_of_episodes
                            ? selectedCard.number_of_episodes
                            : ""}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: "999",
          }}
        >
          <Spinner />
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: "13%",
          width: "80%",
          margin: "0 10%",
          zIndex: "2",
          marginBottom: "1rem",
          background: "#333",
          padding: ".5rem 1rem",
          borderRadius: "1rem",
          height: "4rem",
          color: "#fff",
        }}
      >
        {MovieFilterButtons()}
      </div>
      <div className="mainContentBox">
        <div className="contentBox">
          {movies.results &&
            movies.results.map((movie) =>
              movie.known_for ? (
                <OverviewPeopleCard
                  key={movie.id}
                  movie={movie}
                  selectCard={selectCard}
                />
              ) : (
                <OverviewCard
                  key={movie.id}
                  movie={movie}
                  selectCard={selectCard}
                />
              )
            )}
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
      <Footer />
    </>
  );
};

export default Overview;
