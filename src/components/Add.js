import React, { useContext, useState } from "react";
import ResultCart from "./ResultCart";
import { GlobalContext } from "../Context/GlobalState";

const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function onChange(e) {
    setQuery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        e.target.value
      )}&api_key=4f06c11e878d012468e56b8bbf1db704`
    )
      .then((res) => res.json())
      .then((data) => setResults(data.results))
      .catch((error) => console.log(error));
  }
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,ffbaff)/oE6bhqqVFyIECtBzqIuvh6JdaB5.jpg"></img>
          <div className="titles">
            <h1>REACT-FİLM SİTEM</h1>
            <h2>Milyonlarca film ve keşfedilecek kişi... Şimdi keşfedin.</h2>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              value={query}
              onChange={onChange}
              placeholder="Film, kişi ara..."
            ></input>
          </div>
        </div>
      </div>
      <div className="container container-top">
        {results.map((movie) => (
          <li key={movie.id}>
            <ResultCart movie={movie} />
          </li>
        ))}
      </div>
    </div>
  );
};

export default Add;
