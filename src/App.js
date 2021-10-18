import React from "react";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>JETFLIX</h1>
      <Row
        title="Jetflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Horror" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Comedy" fetchURL={requests.fetchComedyMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
      <Row title="Action" fetchURL={requests.fetchActionMovies} />
      <Row title="Romance" fetchURL={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
