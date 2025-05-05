import React from "react";
import "./Results.css";
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2> {props.results[0].word}</h2>
          {props.results[0].phonetics.map((phonetic, index) => (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          ))}
        </section>
        {props.results[0].meanings.map(function (meaning, index) {
          return (
            <section className="meaning" key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
