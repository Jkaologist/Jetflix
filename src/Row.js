import React, { useState, useEffect } from "react";
import axios from "./axios";

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    //make an asynchronous request to load the movies
    async function fetchData() {
      // await the promise
      const request = await axios.get(fetchURL);
      console.log(request);
    }
    fetchData();
  }, []);

  return (
    <div className="Row">
      <h2>{title}</h2>
      {/* container -> posters */}
    </div>
  );
}

export default Row;
