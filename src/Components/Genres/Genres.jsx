import React, { useEffect } from 'react'
import Chip from '@mui/material/Chip';
import axios from 'axios';
import { API_KEY } from '../API/URL';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const Genres = ({ genres,setGenres, selectedGenres, setSelectedGenres}) => {

     const fetchGenres = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
            setGenres(data.genres)
        } catch (error) {
            console.log(error)
        }
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

     const handleCheckboxChange = (event) => {
        const id = event.target.id;
        setSelectedGenres((selectedGenres) => 
        selectedGenres.includes(id)
            ? selectedGenres.filter(selected => selected.id !== id) 
            : [...selectedGenres, id]
        )
        setSelectedGenres((selectedGenres) => 
        selectedGenres.includes(id)
            ? selectedGenres.filter(selected => selected.id !== id) 
            : [...selectedGenres, id]
        )
      };

      const NavLinkStyle = ({isActive}) =>{
        return {
          color: isActive ? 'crimson' : '#ccc',
        }
      }

      const checkbox = genres.map((genre) => (
        <FormControlLabel
        key={genre.id}
        label={genre.name}
        checked={NavLinkStyle}
        control={
          <Checkbox
            id={genre.id}
            onChange={handleCheckboxChange}
            sx={{
                color: 'crimson',
                '&.Mui-checked': {
                  color: 'crimson',
                },
              }}
          />
        }
      />
      ))

  return (
    <div className='genresRow'>
        {checkbox}
    </div>
  )
}

export default Genres