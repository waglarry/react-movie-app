import React, { Component,useEffect, useState, PropTypes } from 'react';

const GenresChips = ({key, addGenres, removeGenres, label, genre}) => {
  const [isChecked, setIsChecked] = useState(false)


  const toggleCheckboxChange = ({handleCheckboxChange, label}) => {

    setIsChecked(!isChecked)

    handleCheckboxChange(label);
  }

  return (
    <div className="checkbox">
    <label>
      <input
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={toggleCheckboxChange}
      />
      {label}
    </label>
  </div>
  )
}

export default GenresChips