import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  const handleResponse = (response) => {
    console.log(response.data);
    setResults(response.data);
  };

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    search();
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange}></input>
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
