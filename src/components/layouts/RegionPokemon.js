import React, { useContext, useState } from "react";

import PokemonContext from "../../reducers/PokemonContext";
const RegionPokemon = (props) => {
  const pokemonContext = useContext(PokemonContext);
  const { regionalPokemon } = pokemonContext;

  const onChange = (e) => {
    regionalPokemon(e.target.value);
    props.clearText();
  };

  return (
    <select className="custom-select" onChange={onChange}>
      <option value="none">Select Region</option>
      <option value="kanto">Kanto</option>
      <option value="johto">Johto</option>
      <option value="hoenn">Hoenn</option>
      <option value="sinnoh">Sinnoh</option>
      <option value="unova">Unova</option>
      <option value="kalos">Kalos</option>
      <option value="alola">Alola</option>
    </select>
  );
};

export default RegionPokemon;
