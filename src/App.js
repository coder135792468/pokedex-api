import React from "react";
import Header from "./components/layouts/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonScreen from "./components/PokemonScreen";
import PokemonInfoScreen from "./components/PokemonInfoScreen";
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/pokemon/:id" component={PokemonInfoScreen} />
        <Route exact path="/" component={PokemonScreen} />
      </Switch>
    </Router>
  );
};

export default App;
