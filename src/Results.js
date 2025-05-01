import React from "react";
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2> {props.results[0].word}</h2>
        {props.results[0].phonetics.map((phonetic, index) => (
          <div key={index}>
            <Phonetic phonetic={phonetic} />
          </div>
        ))}
        {props.results[0].meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
