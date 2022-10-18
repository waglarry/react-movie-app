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
import ReadMore from '../../ReadMore/ReadMore';
import OverviewPeopleCard from '../../Cards/OverviewPeopleCard/OverviewPeopleCard';

const Overview = () => {
      const [movies, setMovies] = useState({});
      const [selectedCard, setSelectedCard] = useState([])
      const [playTrailer, setPlayTrailer] = useState(false)
      const [currentPageNumber, setCurrentPageNumber] = useState(1);
      const [isDisabled, setDisabled] = useState(false);
      const [searchKeyword, setSearchKeyword] = useState("")
      const [content, setContent] = useState('movie')

        const fetchMovies = async () => {
           try {
              const { data } = await axios.get(`https://api.themoviedb.org/3/${content}/popular?api_key=${API_KEY}&language=en-US&page=${currentPageNumber}`);
              setMovies(data);
              await selectCard(data.results[0]);
           } catch (error) {
             console.log(error)
           }
         }

         const fetchMovie = async (id) => {
          try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/${content}/${id}?api_key=${API_KEY}&append_to_response=videos`);
            return data
          } catch (error) {
            console.log(error)
          }
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
              console.log(error);
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

        const MovieButtons = () => {
          if(content !== "person"){
            return (
              <>
                <button className='videoBtn' onClick={() => setPlayTrailer(true)}>Watch Trailer</button> 
                  <a className='videoBtn downloadBtn' href={`https://www.google.com/search?q=https://www.sabishare.com/file/${selectedCard.original_title || selectedCard.original_name}-netnaija-mp4`} target="_blank" rel="noopener noreferrer">Download</a>
              </>
            )
          }
        }

  return (
    <>
        <div className="hero" style={{ backgroundImage: `url('${API_BGImage}${selectedCard ? selectedCard.backdrop_path || selectedCard.profile_path : ""}')`}}>
            {playTrailer ? <button className='VideoCloseBtn' onClick={() => setPlayTrailer(false)}>X</button> : null}
            {selectedCard.videos && playTrailer ? renderTrailer(selectedCard) : null}
            <div className="heroContentBox" id={playTrailer ? "hideContent" : ""}>
            <div className="overViewTopBar">
            <div className="switchContent">
              <button onClick={() => setContent('movie')} id={content === "movie" ? "activeContetnt" : ""} className="switchContentBtn">Movies</button>
              <button onClick={() => setContent('tv')} id={content === "tv" ? "activeContetnt" : ""} className="switchContentBtn">Series</button>
              <button onClick={() => setContent('person')} id={content === "person" ? "activeContetnt" : ""} className="switchContentBtn">People</button>
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
                <img className='poster' src={`${API_IMG}${selectedCard.poster_path || selectedCard.profile_path}`} alt={selectedCard.title || selectedCard.original_title || selectedCard.original_name || selectedCard.name} />
            </div>
            <div className="heroContent">
                <h2>{selectedCard.title || selectedCard.original_title || selectedCard.original_name || selectedCard.name ? selectedCard.title || selectedCard.original_title || selectedCard.original_name || selectedCard.name : ""}</h2>
                <p style={{color: "#ccc"}}>{selectedCard.tagline ? selectedCard.tagline : ""}</p>
                {MovieButtons()}
                
                <div className="overviewInfo">
                <p className='date'>{content !== 'person' ? "Release Date: " : "Birthday: "} {selectedCard.release_date || selectedCard.first_air_date || selectedCard.birthday ? selectedCard.release_date || selectedCard.first_air_date || selectedCard.birthday : ""}</p>
                <p className='overviewText'><p className='overviewTitle'>{content !== 'person' ? "Overview" : "Biography"}</p><ReadMore>{selectedCard.overview || selectedCard.biography ? selectedCard.overview || selectedCard.biography : ""}</ReadMore></p>
                <div className="otherOverviewInfo">
                <div className="right-col">
                <p><MdOutlineTagFaces /> Popularity: <span>{selectedCard.popularity ? selectedCard.popularity : ""}</span></p>
                <p><AiTwotoneStar /> {content !== 'person'? "Rated: " : "Known for: "} <span>{selectedCard.vote_average || selectedCard.known_for_department ? selectedCard.vote_average || selectedCard.known_for_department : ""}</span></p>
                <p><MdOutlineHowToVote /> {content !== "person" ? "Vote Count: " : "Place of Birth: "} <span>{selectedCard.vote_count || selectedCard.place_of_birth ? selectedCard.vote_count || selectedCard.place_of_birth : ""}</span></p>
                <p><TbMessageLanguage /> {content === "person" ? "" : "Language: "} <span>{selectedCard.original_language ? selectedCard.original_language ? selectedCard.original_language === "en" ? "English" : selectedCard.original_language : "No language found" : ""}</span></p>
                <p>{content !== "tv" ? "" : "Country: "} <span>{selectedCard.origin_country ? selectedCard.origin_country : ""}</span></p>
                </div>
                <div className="left-col">
                <p>{content === "person" ? "" : "Status: "} <span>{selectedCard.status ? selectedCard.status : ""}</span></p>
                <p>{content !== "tv" ? "" : "Type: "} <span>{selectedCard.type ? selectedCard.type : ""}</span></p>
                <p>{content !== "tv" ? "" : "Number of Seasons: "} <span>{selectedCard.number_of_seasons ? selectedCard.number_of_seasons : ""}</span></p>
                <p>{content !== "tv" ? "" : "Number of Episodes: "} <span>{selectedCard.number_of_episodes ? selectedCard.number_of_episodes : ""}</span></p>
                </div>
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
          movie.known_for ? 
          <OverviewPeopleCard 
            key={movie.id}
            movie={movie}
            selectCard={selectCard}
          />
          :
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

export default Overview