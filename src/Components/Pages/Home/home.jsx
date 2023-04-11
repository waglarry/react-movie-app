import React from "react";
import GetRecommendedMovieContent from "../../API/HomeMovieContent/GetRecommendedMovieContent";
import HomeScollMovies from "../../API/HomeMovieContent/HomeScollMovies";
import Footer from "../../Footer/Footer";
import HomePage from "../HomePage/HomePage";

const Home = () => {
  return (
    <div>
      <HomePage />
      <HomeScollMovies
        content={"movie"}
        filter={"popular"}
        contentTilte={"Popular"}
        subContentTilte={"Best Popular Movies"}
      />
      <HomeScollMovies
        content={"movie"}
        filter={"top_rated"}
        contentTilte={"Top Rated"}
        subContentTilte={"Rate from IMDB"}
      />
      <HomeScollMovies
        content={"tv"}
        filter={"popular"}
        contentTilte={"Tv Series"}
        subContentTilte={"Catching Tv Shows"}
      />
      <GetRecommendedMovieContent />
      <Footer />
    </div>
  );
};

export default Home;
