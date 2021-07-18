import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import PokemonState from "./store/PokemonState";
ReactDOM.render(
  <PokemonState>
    <App />
  </PokemonState>,
  document.getElementById("root")
);
