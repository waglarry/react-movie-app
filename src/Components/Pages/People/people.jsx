import React from 'react'
import GetPeopleContent from '../../API/GetPeopleContent'

const people = () => {
  return (
    <div>
      <br /><br /><br /><br /><br /><br /><br /><br />
        People
        <GetPeopleContent content={'person'} filter={'popular'} />
    </div>
  )
}

export default people