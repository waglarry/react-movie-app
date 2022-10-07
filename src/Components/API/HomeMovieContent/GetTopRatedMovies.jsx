import React from 'react'
import { useQuery } from "@tanstack/react-query";
import HomeMovieCard from '../../Cards/HomeMovieCard/HomeMovieCard';
import { fetchTopRatedMovies } from '../URL';
import { Link } from 'react-router-dom'
import Spinner from '../../Spinner/Spinner';

const GetTopRatedMovies = () => {
    const { data, isLoading, isError } = useQuery(
        ["content"], fetchTopRatedMovies);

    if(isLoading) return <Spinner />
    if(isError) return ""

  return (
        <div>
        <div className="FlexMoviesContentDiv">
            <div className="FlexMoviesContentTitle">
              <p>Top Rated</p>
              <span>Best Movies</span>
            </div>
            <Link to='/movies' className='viewMore'>View More</Link>
        </div>
      <div className="HomeContentBox">
        {data.map((c) => (
          <HomeMovieCard
            key={c.id}
            title={c.title}
            released={c.first_air_date || c.release_date}
            poster={c.poster_path}
            rate={c.vote_average}
            wallpaper={c.backdrop_path}
        />
        ))}
    </div>
  </div>
  )
}

export default GetTopRatedMovies