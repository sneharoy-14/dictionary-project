import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-header">
          <header>Header </header>
          <main>
            <Dictionary />
          </main>
          <footer className="App-footer">Coded by Sneha</footer>
        </div>
      </div>
    </div>
  );
}

export default App;
