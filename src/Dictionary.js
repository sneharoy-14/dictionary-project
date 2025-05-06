import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  const handleDictionaryResponse = (response) => {
    setResults(response.data);
  };

  const handlePexelsResponse = (response) => {
    console.log(response.data);
    setPhotos(response.data.photos);
  };

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      "D564n0cRrFTMaFVk2Lk2g29LwVbvDBWv0qPGA6yA6NKYmpV2cErt0uj4";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}`;
    axios
      .get(pexelsApiUrl, {
        headers: {
          Authorization: pexelsApiKey,
        },
      })
      .then(handlePexelsResponse);
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
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
