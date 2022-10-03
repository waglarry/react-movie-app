import React from 'react'
import { useQuery } from "@tanstack/react-query";
import { fetchTrendingMovies } from "./URL";
import HomeMovieCard from '../Cards/HomeMovieCard/HomeMovieCard';
import MovieCard from '../Cards/MovieCard/MovieCard';

const GetTrendingMovies = () => {
    const { data, isLoading, isError } = useQuery(
        ["content"],
        fetchTrendingMovies
      );
    
      if (isLoading) {
        return <h2>Loading...</h2>;
      }
    
      if (isError) {
        return <h2>An error occured</h2>;
      }
    
      return (
        <div>
          <div className="HomeMainContentBox">
            <div className="HomeContentBox" >
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
}

export default GetTrendingMovies