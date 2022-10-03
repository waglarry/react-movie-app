import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPopularTvshows } from "./URL";
import MovieCard from "../Cards/MovieCard/MovieCard";

const GetTvshowsData = () => {
  const { data, isLoading, isError } = useQuery(["content"], fetchPopularTvshows);

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
              title={e.name}
              released={e.first_air_date || e.release_date}
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

export default GetTvshowsData;
