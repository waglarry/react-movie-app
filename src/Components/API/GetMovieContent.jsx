import React from 'react';
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import MovieCard from "../Cards/MovieCard/MovieCard";

const GetMovieContent = ({content, filter}) => {
    const { data, isLoading, isError } = useQuery(
        ["content"],
        () => {
            return Axios.get(`https://api.themoviedb.org/3/${content}/${filter}?api_key=3b92f42dd5e2d7a9ab0a778973611246&language=en-US&page=1`).then((response) => response.data.results)
        }
      );

    if(isLoading) return <h1>Loading...</h1>
    if(isError) return <h1>Error...</h1>

  return (
    <div>
    <div className="mainContentBox">
      <div className="contentBox">
        {data.map((e) => (
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
  )
}

export default GetMovieContent