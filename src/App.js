import './App.css';
import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home/home';
import Movies from './Components/Pages/Movies/movies';
import TvShows from './Components/Pages/TvShows/tvShows';
import Error from './Components/Pages/Error/error';

export const ThemeContext = createContext(null);

function App() {
  const [ theme, setTheme ] = useState("light")
  
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"))
  }


  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
      <Router>
        <Navbar toggleTheme={toggleTheme} checked={theme}/>
            <Routes>
                <Route path='/' element={<Home />} exact/>
                <Route path='/movies' element={<Movies />} />
                <Route path='/tvShows' element={<TvShows />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </Router>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
