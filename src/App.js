import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home/home';
import Movies from './Components/Pages/Movies/movies';
import TvShows from './Components/Pages/TvShows/tvShows';
import Error from './Components/Pages/Error/error';

function App() {
  return (
      <div className="App">
      <Router>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Home />} exact/>
                <Route path='/movies' element={<Movies />} />
                <Route path='/tvShows' element={<TvShows />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
