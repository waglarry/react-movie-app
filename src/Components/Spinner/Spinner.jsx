import React from "react";
import GridLoader from "react-spinners/GridLoader";

const Spinner = () => {
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
        <GridLoader color={'dodgerblue'} loading={true}  size={10} aria-label="Loading Spinner" />
    </div>
  )
}

export default Spinner