import React, { useState, useEffect } from "react";

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    //make a request to load the movies
  }, []);

  return (
    <div className="Row">
      <h2>{title}</h2>
      {/* container -> posters */}
    </div>
  );
}

export default Row;
