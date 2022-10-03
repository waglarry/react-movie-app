import React from 'react'
import { useQuery } from "@tanstack/react-query";
import MovieContent from "../Cards/MovieCard/MovieCard";
import { fetchPopularPeople } from './URL';

const GetPeopleData = () => {
  const { data, isLoading, isError } = useQuery(["content"], fetchPopularPeople);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>An error occured</h2>;
  }

  return (
    <div>
    <div className="mainContentBox">
      <div className="contentBox">
        {data.data.results.map((e) => (
          <MovieContent
            key={e.id}
            name={e.name}
            known_for={e.known_for_department}
          />
        ))}
      </div>
    </div>
  </div>
  )
}

export default GetPeopleData