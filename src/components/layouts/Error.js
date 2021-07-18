import React from "react";

const Error = ({ error }) => {
  return (
    <div className="error_page">
      <h1 className="text-center">{error.toUpperCase()}</h1>
      <a href="/" className="btn btn-primary">
        Go To Home
      </a>
    </div>
  );
};

export default Error;
