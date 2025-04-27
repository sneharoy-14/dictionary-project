import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  const handleResponse = (response) => {
    console.log(response.data);
    setResults(response.data);
  };

  const search = (event) => {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange}></input>
      </form>
      <Results results={results} />
    </div>
  );
}
