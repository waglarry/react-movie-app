import React, {useState} from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const GenresChips = ({key, addGenres, removeGenres, label, genre}) => {
    const [isChecked, setIsChecked] = useState(false)

    const handleChange = (event) => {
        setIsChecked(event.target.checked);
        isChecked ? addGenres(genre) : removeGenres(genre);
    };

  return (
    <FormGroup>
    <FormControlLabel control={
            <Checkbox
            
            checked={isChecked}
            onChange={handleChange}
            // inputProps={{ 'aria-label': 'controlled' }}
        />
    } label={label} />
  </FormGroup>
  )
}

export default GenresChips