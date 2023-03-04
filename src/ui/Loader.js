import React from "react";

function Loader() {
  return (
    <div className="spinner-border d-block mx-auto m-5" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

export default Loader;
