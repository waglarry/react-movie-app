import React from 'react'
import { useQuery } from "@tanstack/react-query";
import MovieCard from "../Cards/MovieCard/MovieCard";
import { fetchPopularPeople } from './URL';
import PeopleCard from '../Cards/PeopleCard/PeopleCard';

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
          <PeopleCard
            key={e.id}
            name={e.name}
            known_for={e.known_for_department}
            poster={e.profile_path}
          />
        ))}
      </div>
    </div>
  </div>
  )
}

export default GetPeopleData