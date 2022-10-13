import React, {useState, useEffect} from 'react';
import { API_BGImage, API_IMG, API_KEY } from '../../API/URL';
import axios from 'axios';
import OverviewCard from '../../Cards/OverviewCard/OverviewCard';
import './overview.css'
import YouTube from 'react-youtube';
import { FaSearch } from 'react-icons/fa'
import PaginationButton from '../../PaginationButton/PaginationButton';
import Footer from '../../Footer/Footer'
import { AiTwotoneStar } from 'react-icons/ai'
import { MdOutlineHowToVote, MdOutlineTagFaces } from 'react-icons/md'
import { TbMessageLanguage } from 'react-icons/tb'

const overview = () => {
      const [movies, setMovies] = useState({});
      const [selectedCard, setSelectedCard] = useState([])
      const [playTrailer, setPlayTrailer] = useState(false)
      const [currentPageNumber, setCurrentPageNumber] = useState(1);
      const [isDisabled, setDisabled] = useState(false);
      const [searchKeyword, setSearchKeyword] = useState("")
      const [content, setContent] = useState('movie')

        const fetchMovies = async () => {
            const { data } = await axios.get(`https://api.themoviedb.org/3/${content}/popular?api_key=${API_KEY}&language=en-US&page=${currentPageNumber}`);
            setMovies(data);
            await selectCard(data.results[0]);
         }

         const fetchMovie = async (id) => {
          const { data } = await axios.get(`https://api.themoviedb.org/3/${content}/${id}?api_key=${API_KEY}&append_to_response=videos`);
          return data
        }


        const selectCard = async (movie) => {
          setPlayTrailer(false)
          const data = await fetchMovie(movie.id)
          setSelectedCard(data)
        }

        const renderTrailer = (selectedCard) => {
          const trailer = selectedCard.videos.results.find((vid) => vid.name === "Official Trailer")
          const key = trailer ? trailer.key : selectedCard.videos.results[0].key

          return (
            <div className="VideoContainer">
              <YouTube 
              videoId={key}
              className={'youtubeContainer'}
              iframeClassName={'iframeContainer'}
              title={'WagaTrendz'}
              opts={{
                width: "100%",
                height: "100%",
                playerVars: {
                  autoplay: 1,
                  // controls: 0
                }
              }}
            />
            </div>
          )
        }
    
         useEffect(() => {
            fetchMovies();
         }, [currentPageNumber, content])

         const searchMovie = async (event) =>{
          if(event.key==="Enter"){
            try {
              setSearchKeyword("");
              const {data} = await axios.get(`https://api.themoviedb.org/3/search/${content}?api_key=${API_KEY}&query=${searchKeyword}`)
              await selectCard(data.results[0]);
              return setMovies(data)
            } catch (error) {
              return <h1>{error}</h1>
            }
          }
        }

         const nextPage = () => {
          setCurrentPageNumber(currentPageNumber + 1);
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        };
      
        const previousPage = () => {
          setCurrentPageNumber(currentPageNumber - 1);
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        };

  return (
    <>
        <div className="hero" style={{ backgroundImage: `url('${API_BGImage}${selectedCard ? selectedCard.backdrop_path : ""}')`}}>
            {playTrailer ? <button className='VideoCloseBtn' onClick={() => setPlayTrailer(false)}>X</button> : null}
            {selectedCard.videos && playTrailer ? renderTrailer(selectedCard) : null}
            <div className="heroContentBox" id={playTrailer ? "hideContent" : ""}>
            <div className="overViewTopBar">
            <div className="switchContent">
              <button onClick={() => setContent('movie')} className="switchContentBtn">Movies</button>
              <button onClick={() => setContent('tv')} className="switchContentBtn">Tv Shows</button>
            </div>
            <form className="search"
              onSubmit={(event) => {
                event.preventDefault();
              }}>
                <input type="text" className='overviewSearchInput' placeholder='Movies, Tv Shows, People...' onChange={(e) => {setSearchKeyword(e.target.value)}} value={searchKeyword} onKeyPress={searchMovie} />
                <button type='button' className='overviewSearchBtn'>
                  <FaSearch />
                </button>
              </form>
          </div>
            <div className='heroContentDetails'>
            <div className="heroPoster">
                <img className='poster' src={`${API_IMG}${selectedCard.poster_path}`} alt="" />
            </div>
            <div className="heroContent">
                <h1>{selectedCard.title || selectedCard.original_title || selectedCard.original_name || selectedCard.name}</h1>
                <button className='videoBtn' onClick={() => setPlayTrailer(true)}>Watch Trailer</button> 
                <a className='videoBtn downloadBtn' href={`https://www.google.com/search?q=https://www.sabishare.com/file/${selectedCard.original_title || selectedCard.original_name}-netnaija-mp4`} target="_blank">Download</a>
                
                <div className="overviewInfo">
                <p className='date'>Release Date: {selectedCard.release_date}</p>
                <p className='overviewText'><p className='overviewTitle'>Overview</p>{selectedCard.overview}</p>
                <div className="otherOverviewInfo">
                <p><MdOutlineTagFaces /> Popularity: <span>{selectedCard.popularity}</span></p>
                <p><AiTwotoneStar /> Rated: <span>{selectedCard.vote_average}</span></p>
                <p><MdOutlineHowToVote /> Vote Count: <span>{selectedCard.vote_count}</span></p>
                <p><TbMessageLanguage /> Language: <span>{selectedCard.original_language ? selectedCard.original_language === "en" ? "English" : "" : ""}</span></p>
                </div>
                </div>
            </div>
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
  <PaginationButton
          previousPage={previousPage}
          nextPage={nextPage}
          currentPageNumber={currentPageNumber}
          isDisabled={isDisabled}
          movies={movies}
          setDisabled={setDisabled}
        />
        <Footer />
    </>
  )
}

export default overview