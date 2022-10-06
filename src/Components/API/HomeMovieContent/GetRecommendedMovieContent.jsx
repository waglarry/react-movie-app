import React from 'react'
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import RecommendedCard from '../../Cards/RecommendedCard/RecommendedCard';
import { API_KEY } from '../URL';
import ErrorIcon from '../../ErrorIcon/ErrorIcon';
import Spinner from '../../Spinner/Spinner';
import { Link } from 'react-router-dom'

const GetRecommendedMovieContent = () => {
    const {data, isLoading, isError } = useQuery(
        ["content"],
        () => {
          return Axios.get(
            `https://api.themoviedb.org/3/movie/2/recommendations?api_key=${API_KEY}&language=en-US&page=1`,
            { keepPreviousData: true }
          ).then((response) => response.data);
        }
      );
    
      if (isLoading) return <Spinner />;
      if (isError) return <ErrorIcon />;

  return (
    <div>
        <div className="FlexMoviesContentDiv">
            <div className="FlexMoviesContentTitle">
              <p>Recommended</p>
              <span>Best Movies</span>
            </div>
            <Link to='/movies' className='viewMore'>View More</Link>
        </div>
        <div className="HomeContentBox">
          {data &&
            data.map((e) => (
              <RecommendedCard
                key={e.id}
                title={e.title || e.name}
                wallpaper={e.backdrop_path}
              />
            ))}
        </div>
    </div>
  )
}

export default GetRecommendedMovieContent