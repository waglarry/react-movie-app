import Axios from "axios";

export const API_IMG = "https://image.tmdb.org/t/p/w500"
export const API_BGImage = "https://image.tmdb.org/t/p/original"
// export const API_OverViewBG = "https://image.tmdb.org/t/p/w1280"
export const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";
export const API_KEY = process.env.REACT_APP_API_KEY


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

export const fetchPopularMovies = () => {
    return Axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    );
};