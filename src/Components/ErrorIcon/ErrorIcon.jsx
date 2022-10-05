import React from 'react'
import { TbFaceIdError } from "react-icons/tb"

const ErrorIcon = () => {
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    }}>
        <TbFaceIdError size={80} />
        <p>Could not load movies</p>
    </div>
  )
}

export default ErrorIcon