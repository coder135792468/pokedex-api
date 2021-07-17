import React from "react";
import { Spinner } from "react-bootstrap";
const Loader = () => {
  return (
    <Spinner
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        zIndex: 3,
      }}
      animation="border"
    >
      {/* <span className="visually-hidden">Loading...</span> */}
    </Spinner>
  );
};

export default Loader;
