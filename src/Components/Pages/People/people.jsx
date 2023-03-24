import React from 'react'
import GetPeopleContent from '../../API/GetPeopleContent'
import Footer from '../../Footer/Footer'

const people = () => {
  return (
    <div>
        <GetPeopleContent content={'person'} contentTitle={'People'} filter={['Popular','Latest']} />
        <Footer />
    </div>
  )
}

export default people
