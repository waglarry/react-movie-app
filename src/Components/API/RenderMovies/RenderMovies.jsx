import React from 'react'
import MovieCard from '../../Cards/MovieCard/MovieCard'
import ErrorIcon from '../../ErrorIcon/ErrorIcon'

const RenderMovies = ({movies}) => {
  return (
    <>
    {(movies.length === 0) ? <ErrorIcon /> : movies.results &&
        movies.results.map((e) => (
      <MovieCard
        key={e.id}
        title={e.title || e.name}
        released={e.first_air_date || e.release_date}
        poster={e.poster_path}
        rate={e.vote_average}
        overview={e.overview}
        wallpaper={e.backdrop_path}
      />
    ))}
    </>
  )
}

export default RenderMovies