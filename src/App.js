import React from "react";
import PokeBattle from "./PokeBattle";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Pokemon Battle</h1>
        <PokeBattle />
      </div>
    );
  }
}

export default App;
