import React from "react";
import Header from "./components/layouts/Header";

import { BrowserRouter as Router, Route } from "react-router-dom";
import PokemonScreen from "./components/PokemonScreen";
import PokemonInfoScreen from "./components/PokemonInfoScreen";
const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={PokemonScreen} />
      <Route exact path="/pokemon/:id" component={PokemonInfoScreen} />
    </Router>
  );
};

export default App;
