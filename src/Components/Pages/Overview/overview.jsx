import React, {useState, useEffect} from 'react';
import { API_BGImage, API_IMG, API_KEY } from '../../API/URL';
import axios from 'axios';
import OverviewCard from '../../Cards/OverviewCard/OverviewCard';
import './overview.css'
import YouTube from 'react-youtube';


const overview = () => {
const [movies, setMovies] = useState({});
const [selectedCard, setSelectedCard] = useState([])

        const fetchMovies = async () => {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
            setMovies(data);
            setSelectedCard(data.results[0]);
         }
    
         useEffect(() => {
            fetchMovies();
         }, [])

  return (
    <>
        <div className="hero" style={{ backgroundImage: `url('${API_BGImage}${selectedCard.backdrop_path}')`}}>
            <YouTube />
            <div className="heroContentBox">
            <div className="heroPoster">
                <img className='poster' src={`${API_IMG}${selectedCard.poster_path}`} alt="" />
            </div>
            <div className="heroContent">
                <h1>{selectedCard.title}</h1>
                <span>Language: {selectedCard.original_language === "en" ? "English" : ""}</span> <br />
                <span>Popularity: {selectedCard.popularity}</span> <br />
                <span>Rated: {selectedCard.vote_average}</span> <br />
                <span>Vote Count: {selectedCard.vote_count}</span>
                <p><p className='overviewTitle'>Overview</p>{selectedCard.overview}</p>
                <button>Play Trailer</button>
            </div>
            </div>
        </div>
        <div className="mainContentBox">
    <div className="contentBox">
      {movies.results &&
        movies.results.map((movie) => (
          <OverviewCard
            key={movie.id}
            movie={movie}
            selectCard={setSelectedCard}
          />
        ))}
    </div>
  </div>    
    </>
  )
}

export default overview