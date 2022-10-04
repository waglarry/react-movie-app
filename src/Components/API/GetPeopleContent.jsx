import React from 'react'
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import PeopleCard from '../Cards/PeopleCard/PeopleCard';
import { API_KEY } from './URL';

const GetPeopleContent = ({content, filter}) => {
    const { data, isLoading, isError } = useQuery(
        ["content"],
        () => {
            return Axios.get(`https://api.themoviedb.org/3/${content}/${filter}?api_key=${API_KEY}&language=en-US&page=1`).then((response) => response.data.results)
        }
      );

      if(isLoading) return <h1>Loading...</h1>
      if(isError) return <h1>Error...</h1>
  return (
    <div>
    <div className="mainContentBox">
      <div className="contentBox">
        {data.map((e) => (
          <PeopleCard
            key={e.id}
            poster={e.profile_path}
            name={e.name}
            known_for={e.known_for_department}
        />
        ))}
      </div>
    </div>
  </div>
  )
}

export default GetPeopleContent