import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API_KEY } from '../API/URL';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Select } from '@mui/material';


const Genres = ({ setSelectedGenres}) => {
      const [genres, setGenres] = useState([])

     const fetchGenres = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
            setGenres(data.genres)
        } catch (error) {
            console.log("")
        }
     }

     useEffect(() => {
       fetchGenres();
     }, [])

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

      const activeButton = ({isActive}) =>{
        return {
          color: isActive ? 'crimson' : '#ccc',
        }
      }

      const checkbox =
        genres &&
        genres.map((genre) => (
          <FormControlLabel
            key={genre.id}
            label={genre.name}
            // checked={activeButton}
            control={
              <Checkbox
                id={genre.id}
                onChange={handleCheckboxChange}
                sx={{
                  color: "crimson",
                  "&.Mui-checked": {
                    color: "crimson",
                  },
                }}
              />
            }
          />
        ));

      const [genreId, setgenreId] = useState("")

      const handleChange = (event) => {
        const id = event.target.value;
        setgenreId(id)
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

      const genValues = genres && genres.map((genre) => (
        <MenuItem value={genre.id}>{genre.name}</MenuItem>
      ))

  return (
    <div>
      <span className='ShowfilterText'>Filter By Genres</span>
      <div className='genresRow'>
        {checkbox}
    </div>
    <div className='mobileGenres'>
    <Box>
      <FormControl fullWidth size="small" sx={{background: "#ccc", borderRadius: ".3rem"}}>
        <InputLabel id="demo-simple-select-label">Genres</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={genreId}
          label="Genres"
          onChange={handleChange}
        >
          {genValues}
        </Select>
      </FormControl>
      </Box>
    </div>
    </div>
  )
}

export default Genres