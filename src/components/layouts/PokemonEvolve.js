import React, { useContext, useEffect } from "react";
import { Row } from "react-bootstrap";
import PokemonContext from "../../store/PokemonContext";
import { getRegionalPokemonID } from "../../utils";
import PokeItems from "../PokeItems";
import Loader from "./Loader";
import "../styles/styles.scss";

const PokemonEvolve = ({ chain_url }) => {
  const pokemonContext = useContext(PokemonContext);
  const { getEvolutionChain, loading, error, clearEvolutionChain, chain } =
    pokemonContext;

  useEffect(() => {
    if (!chain) {
      clearEvolutionChain();
      getEvolutionChain(chain_url);
    }
    // eslint-disable-next-line
  }, [chain_url]);
  return loading && !error ? (
    <Loader />
  ) : (
    <div className="my-7">
      <h1 className="text-center">Evolution Chain</h1>
      <Row xs={1} md={3} className="g-4">
        {chain?.map(({ url, name }, index) => (
          <PokeItems
            key={index + 1}
            name={name}
            id={getRegionalPokemonID(url)}
          />
        ))}
      </Row>
    </div>
  );
};

export default PokemonEvolve;
