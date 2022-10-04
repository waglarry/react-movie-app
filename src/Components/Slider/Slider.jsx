import React from 'react'
import Axios from "axios";
import './Slider.css'
import { useQuery } from "@tanstack/react-query";
import { API_IMG, API_KEY } from '../API/URL';

const Slider = () => {
    const { data, isLoading, isError } = useQuery(
        ["content"],
        () => {
            return Axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`).then((response) => response.data.results)
        }
      );
    
      if(isLoading) return <h1>Loading...</h1>
      if(isError) return <h1>Error...</h1>

  return (
    <div className='slider'>
        {data.map((e) => {
            return (
                <div className="slide current" key={e.id}>
                    <img src={API_IMG+e.backdrop_path} alt={e.title} />
                </div>
            )
        })}
    </div>
  )
}

export default Slider