import React from 'react'
import GetPeopleContent from '../../API/GetPeopleContent'
import NavPage from '../TopMainPages/NavPage/NavPage'

const people = () => {
  return (
    <div>
      <div className="PeoplePageTopContent">
        <NavPage contentTitle={'People'} filter={['Popular','Latest']} />
      </div>
        <GetPeopleContent content={'person'} filter={'popular'} />
    </div>
  )
}

export default people