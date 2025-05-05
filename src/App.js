import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-header">
          <header className="App-title">DICTIONARY</header>
          <main>
            <Dictionary defaultKeyword="clock" />
          </main>
          <footer className="App-footer">Coded by Sneha Dey Roy</footer>
        </div>
      </div>
    </div>
  );
}

export default App;
