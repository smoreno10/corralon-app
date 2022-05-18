import React from "react";

const Wait = () => {
  return (
    <div className="d-flex justify-content-center mt-3">
      <div className="spinner-grow text-warning" role="status">
        <span className="sr-only"></span>
      </div>
      <div className="spinner-grow text-warning" role="status">
        <span className="sr-only"></span>
      </div>
      <div className="spinner-grow text-warning" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default Wait;
