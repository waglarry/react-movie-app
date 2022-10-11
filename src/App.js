import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home/home';
import Movies from './Components/Pages/Movies/movies';
import TvShows from './Components/Pages/TvShows/tvShows';
import People from './Components/Pages/People/people';
import Error from './Components/Pages/Error/error';
import Overview from './Components/Pages/Overview/overview';

function App() {
  const client = new QueryClient({
    defaultOptions: {
    queries: {
    refetchOnWindowFocus: false,
    },
    },
    });
  return (
      <div className="App">
        <QueryClientProvider client={client}>
          <Router>
            <Navbar/>
                <Routes>
                    <Route path='/' element={<Home />} exact/>
                    <Route path='/movies' element={<Movies />} />
                    <Route path='/tvShows' element={<TvShows />} />
                    <Route path='/people' element={<People />} />
                    <Route path='/overview' element={<Overview />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </Router>
        </QueryClientProvider>
    </div>
  );
}

export default App;
