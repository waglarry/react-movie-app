import React from 'react';
import { useQuery } from "@tanstack/react-query";
import HomeMovieCard from '../../Cards/HomeMovieCard/HomeMovieCard';
import { fetchTrendingMovies } from '../URL';

const GetTrendingMovies = () => {
    const { data, isLoading, isError } = useQuery(
        ["content"], fetchTrendingMovies);

    if(isLoading) return <h1>Loading...</h1>
    if(isError) return <h1>Error...</h1>

  return (
    <div>
      <div className="HomeContentBox">
        {data.map((e) => (
          <HomeMovieCard
            key={e.id}
            title={e.name}
            released={e.first_air_date || e.release_date}
            poster={e.poster_path}
            rate={e.vote_average}
            wallpaper={e.backdrop_path}
        />
        ))}
    </div>
  </div>
  )
}

export default GetTrendingMovies