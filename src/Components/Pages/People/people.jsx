import React from 'react'
import GetPeopleContent from '../../API/GetPeopleContent'

const people = () => {
  return (
    <div>
        <GetPeopleContent content={'person'} contentTitle={'People'} filter={['Popular','Latest']} />
    </div>
  )
}

export default people