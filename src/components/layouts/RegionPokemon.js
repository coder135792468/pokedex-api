import React, { useContext } from "react";

import PokemonContext from "../../store/PokemonContext";
const RegionPokemon = ({ clearText }) => {
  const pokemonContext = useContext(PokemonContext);
  const { regionalPokemon } = pokemonContext;

  const onChange = (e) => {
    regionalPokemon(e.target.value);
    clearText();
  };
  const regions = [
    "none",
    "kanto",
    "johto",
    "hoenn",
    "sinnoh",
    "unova",
    "kalos",
    "alola",
  ];
  return (
    <select className="custom-select" onChange={onChange}>
      {regions.map((region, i) => (
        <option key={i + 1} value={region}>
          {region === "none" ? "Select Region" : region}
        </option>
      ))}
    </select>
  );
};

export default RegionPokemon;
