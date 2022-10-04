import Axios from "axios";

export const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=3b92f42dd5e2d7a9ab0a778973611246&language=en-US&page=1`;
export const API_IMG = "https://image.tmdb.org/t/p/w500"
export const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";
export const API_KEY = process.env.REACT_APP_API_KEY

export   const fetchMovies = () => {
    return Axios.get(
      `https://api.themoviedb.org/3/movie/2?api_key=3b92f42dd5e2d7a9ab0a778973611246&language=en-US`
    );
  };

  export   const fetchTvShows = () => {
    return Axios.get(
        `https://api.themoviedb.org/3/tv/1?api_key=3b92f42dd5e2d7a9ab0a778973611246&language=en-US`
    );
  };


export const fetchPopularMovies = () => {
    return Axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=3b92f42dd5e2d7a9ab0a778973611246&language=en-US&page=1`
    );
};

export const fetchTrendingMovies = () => {
    return Axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=3b92f42dd5e2d7a9ab0a778973611246`
    );
};

export const fetchTopRatedMovies = () => {
    return Axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=3b92f42dd5e2d7a9ab0a778973611246&language=en-US&page=1`
    );
};

export const fetchPopularTvshows = () => {
    return Axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=3b92f42dd5e2d7a9ab0a778973611246&language=en-US&page=1`
    );
};

export const fetchPopularPeople = () => {
    return Axios.get(
        `https://api.themoviedb.org/3/person/popular?api_key=3b92f42dd5e2d7a9ab0a778973611246&language=en-US&page=1`
    );
};