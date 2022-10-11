import React, { useEffect, useState } from 'react'
import Chip from '@mui/material/Chip';
import axios from 'axios';
import { API_KEY } from '../API/URL';

const Genres = ({ genres,setGenres, selectedGenres, setSelectedGenres}) => {

     const fetchGenres = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
        setGenres(data.genres)
     }

     useEffect(() => {
       fetchGenres();
     }, [])
     
     const handleAddGenres = (genre) => {
        setSelectedGenres([...selectedGenres, genre])
        setGenres(genres && genres.filter(filtGenre => filtGenre && filtGenre.id !== genre.id))
     }

     const handleRemoveGenres = (genre) => {
        setSelectedGenres(selectedGenres && selectedGenres.filter(selected => selected && selected.id !== genre.id));
        setGenres([...genres, genre])
     }
  return (
    <div className='genresRow'>
        {selectedGenres && selectedGenres.map((genre) => (
            <Chip 
            key={genre.id}
            label={genre.name} 
            clickable
            onDelete={() => handleRemoveGenres(genre)}
            style={{backgroundColor: "crimson"}}
        />
        ))}
        {genres && genres.map((genre) => (
            <Chip 
                key={genre.id}
                label={genre.name} 
                clickable
                onClick={() => handleAddGenres(genre)}
            />
        ))}
        <div className="mobileGenres">
        {genres && genres.map((genre) => (
            <Chip 
                key={genre.id}
                label={genre.name} 
                clickable
                onClick={() => handleAddGenres(genre)}
            />
        ))}
        </div>
    </div>
  )
}

export default Genres