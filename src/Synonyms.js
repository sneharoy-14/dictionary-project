import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <strong>Synonyms: </strong>
        <ul>
          {props.synonyms.map((synonym) => {
            return <li key={synonym}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
