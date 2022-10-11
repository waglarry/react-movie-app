import React, {useState, useEffect} from 'react';
import { API_BGImage, API_IMG, API_KEY } from '../../API/URL';
import axios from 'axios';
import OverviewCard from '../../Cards/OverviewCard/OverviewCard';
import './overview.css'
import YouTube from 'react-youtube';


const overview = () => {
      const [movies, setMovies] = useState({});
      const [selectedCard, setSelectedCard] = useState([])
      const [playTrailer, setPlayTrailer] = useState(false)

        const fetchMovies = async () => {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
            setMovies(data);
            await selectCard(data.results[0]);
         }

         const fetchMovie = async (id) => {
          const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`);

          return data
        }

        const selectCard = async (movie) => {
          const data = await fetchMovie(movie.id)
          setSelectedCard(data)
        }

        const renderTrailer = (selectedCard) => {
          const trailer = selectedCard.videos.results.find((vid) => vid.name === "Official Trailer")
          return (
            <YouTube 
              videoId={trailer.key}
              containerClassname={'youtubeContainer'}
              opts={{
                width: "100%",
                height: "100%"
              }}
            />
          )
        }
    
         useEffect(() => {
            fetchMovies();
         }, [])

  return (
    <>
        <div className="hero" style={{ backgroundImage: `url('${API_BGImage}${selectedCard.backdrop_path}')`}}>
            {selectedCard.videos && playTrailer ? renderTrailer(selectedCard) : null}
            <div className="heroContentBox" id={playTrailer ? "hideContent" : ""}>
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
                <button onClick={() => setPlayTrailer(true)}>Play Trailer</button>
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
            selectCard={selectCard}
          />
        ))}
    </div>
  </div>    
    </>
  )
}

export default overview