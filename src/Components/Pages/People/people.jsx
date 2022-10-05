import React from 'react'
import GetPeopleContent from '../../API/GetPeopleContent'

const people = () => {
  return (
    <div>
      {/* <div className="PeoplePageTopContent">
        <NavPage contentTitle={'People'} filter={['Popular','Latest']} />
      </div> */}
        <GetPeopleContent content={'person'} contentTitle={'People'} filter={['Popular','Latest']} />
    </div>
  )
}

export default people