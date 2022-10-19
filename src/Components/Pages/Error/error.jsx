import { padding } from '@mui/system'
import React from 'react'
import Footer from '../../Footer/Footer'
import { TbError404 } from 'react-icons/tb'

const Error = () => {
  return (
    <>
      <div style={{
      // position: "absolute",
      // top: "50%",
      // left: "50%",
      // transform: "translate(-50%, -50%)",
      fontSize: "1.5rem",
      padding: "20rem 0"
    }}><p style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
    }}><span style={{fontSize: "10rem"}}><TbError404 /></span><br /> Page Not Found</p></div>
    <Footer />
    </>
  )
}

export default Error