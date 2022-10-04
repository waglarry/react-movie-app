import Axios from "axios";

export const API_IMG = "https://image.tmdb.org/t/p/w500"
export const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";
export const API_KEY = process.env.REACT_APP_API_KEY

export   const fetchMovies = () => {
    return Axios.get(
      `https://api.themoviedb.org/3/movie/2?api_key=${API_KEY}&language=en-US`
    );
  };

  export   const fetchTvShows = () => {
    return Axios.get(
        `https://api.themoviedb.org/3/tv/1?api_key=${API_KEY}&language=en-US`
    );
  };


export const fetchTrendingMovies = () => {
    return Axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
    ).then((response) => response.data.results)
};

export const fetchTopRatedMovies = () => {
    return Axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
    );
};
