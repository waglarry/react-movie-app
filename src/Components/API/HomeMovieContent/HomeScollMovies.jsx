import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../URL";
import { Link } from "react-router-dom";
import HomeMovieCard from "../../Cards/HomeMovieCard/HomeMovieCard";

const HomeScollMovies = ({
  content,
  filter,
  contentTilte,
  subContentTilte,
}) => {
  const [movies, setMovies] = useState({});

  const fetchMovieData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${content}/${filter}?api_key=${API_KEY}&language=en-US&page=1`
      );
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  return (
    <>
      <div className="FlexMoviesContentDiv">
        <div className="FlexMoviesContentTitle">
          <p>{contentTilte}</p>
          <span>{subContentTilte}</span>
        </div>
        <Link
          to={content === "tv" ? `/tvshows` : `/movies`}
          className="viewMore"
        >
          View More
        </Link>
      </div>
      <div className="HomeContentBox">
        {movies.results &&
          movies.results.map((e) => (
            <HomeMovieCard
              key={e.id}
              title={e.name || e.title}
              released={e.first_air_date || e.release_date}
              poster={e.poster_path}
              rate={e.vote_average}
              wallpaper={e.backdrop_path}
              content={content}
            />
          ))}
      </div>
    </>
  );
};

export default HomeScollMovies;
