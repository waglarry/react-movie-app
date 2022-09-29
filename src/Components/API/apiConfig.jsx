import React from 'react'
import Axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { API_URL } from './urls'

const fetchData = () => {
  return Axios.get( API_URL )
}

const ApiConfig = () => {
    const { data, isLoading } = useQuery(['content'], fetchData)

  if(isLoading){
    return <h2>Loading...</h2>
  }

  return (
    <div>
      {data?.results.map((movie) => {
        return <div key={movie.id}>{movie.title}</div>
      })}
    </div>
  )
}

export default ApiConfig