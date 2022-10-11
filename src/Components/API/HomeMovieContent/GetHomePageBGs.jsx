import React, { useState } from "react";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { API_BGImage, API_KEY } from "../URL";
import ErrorIcon from "../../ErrorIcon/ErrorIcon";
import Spinner from "../../Spinner/Spinner";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const GetHomePageBGs = ({ content, movieFilter }) => {
  const [movies, setMovies] = useState({});
  // const [selectMovie, setSelectedMovie] = useState([])

  const { isLoading, isError } = useQuery(
    ["content", movieFilter],
    () => {
      return Axios.get(
        `https://api.themoviedb.org/3/${content}/${movieFilter}?api_key=${API_KEY}&language=en-US&page=1`,
        { keepPreviousData: true }
      ).then((response) => response.data);
    },
    { onSuccess: setMovies }
  );

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorIcon />;

  return (
    <>
        <div className="BgPoster">
        <Carousel style={{maxHeight: "50vh"}}
                showThumbs={false}
                autoPlay={true}
                transitionTime={50}
                infiniteLoopt={true}
                showStatus={false}
                interval={10000}
                showArrows={true}
                dynamicHeight={false}
                showIndicators={false}
            >
            { movies.results &&
            movies.results.map((movie) => (
              <div key={movie.id}>
              <div className="posterImage">
                <img src={`${API_BGImage}${movie && movie.backdrop_path}`} alt="" />
              </div>
              <div className="posterImageOverlay">
                  <h1 className="posterImageTitle">{movie ? movie.original_title || movie.title : ""}</h1>
                  <div className="posterImageDetails">
                    <div className="detailsContent">
                      <p className="posterImageDate"><span className="detailTitle">Released: </span> {movie ? movie.release_date || movie.first_air_date : ""}</p>
                      <p className="movieType"><span className="detailTitle">Type: </span> {movie ? movie.movie_type : ""}</p>
                      <p className="posterImageRating"><span className="detailTitle">Rated: </span> {movie ? movie.vote_average : ""}</p>
                      <p className="posterImagePopulartity"><span className="detailTitle">Popularity: </span> {movie ? movie.popularity : ""}</p>
                      <p className="posterImageLanguage"><span className="detailTitle">Language: </span> {movie ? (movie.original_language === "en" ? "English" : "") : ""}</p>
                    </div>
                    <p className="posterImageOverview"><span>Overview</span> <br />{movie ? movie.overview : ""}</p>
                  </div>
              </div>
              </div>
            ))}
            </Carousel>
        </div>
    </>
  );
};

export default GetHomePageBGs
