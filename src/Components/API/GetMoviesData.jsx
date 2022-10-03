import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPopularMovies } from "./URL";
import MovieCard from "../Cards/MovieCard/MovieCard";

const GetMoviesData = () => {
  const { data, isLoading, isError } = useQuery(
    ["content"],
    fetchPopularMovies
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>An error occured</h2>;
  }

  return (
    <div>
      <div className="mainContentBox">
        <div className="contentBox">
          {data.data.results.map((e) => (
            <MovieCard
              key={e.id}
              title={e.title || e.name}
              released={e.release_date || e.first_air_date}
              poster={e.poster_path}
              rate={e.vote_average}
              overview={e.overview}
              wallpaper={e.backdrop_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetMoviesData;
