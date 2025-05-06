import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      {props.phonetic.text && <p className="text">{props.phonetic.text}</p>}
      {props.phonetic.audio && (
        <ReactAudioPlayer src={props.phonetic.audio} controls />
      )}
    </div>
  );
}
<ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls />;
