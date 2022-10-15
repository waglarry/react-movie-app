import React from 'react'
import Footer from '../../Footer/Footer'

const Error = () => {
  return (
    <>
      <div style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "1.5rem"
    }}>Page Not Found</div>
    <Footer />
    </>
  )
}

export default Error