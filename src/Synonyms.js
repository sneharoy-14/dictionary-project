import React from "react";

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map((synonym) => {
          return <li key={synonym}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
