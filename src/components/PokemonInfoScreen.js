import React, { useContext, useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

import PokemonContext from "../reducers/PokemonContext";
import PokemonAbility from "./layouts/PokemonAbility";
import PokemonBaseStat from "./layouts/PokemonBaseStat";
import PokemonEvolve from "./layouts/PokemonEvolve";
import SkipPageButtons from "./SkipPageButtons";
import Loader from "./layouts/Loader";

const PokemonInfoScreen = ({ match }) => {
  const pokemonContext = useContext(PokemonContext);
  const {
    loading,
    getPokemonInfo,
    resetPokemonInfo,
    getPokemonSpecies,
    clearPokemonSpecies,
    current_pokemon_species,
    current_pokemon,
    clearEvolutionChain,
  } = pokemonContext;

  const id = match.params.id;
  const [showAbility, setShowAbility] = useState(true);
  const [showMoves, setShowMoves] = useState(false);
  const [showType, setShowType] = useState(false);

  const showInfo = (infotype) => {
    switch (infotype) {
      case "ability":
        setShowAbility(true);
        setShowMoves(false);
        setShowType(false);
        return;
      case "moves":
        setShowAbility(false);
        setShowMoves(true);
        setShowType(false);
        return;
      case "type":
        setShowAbility(false);
        setShowMoves(false);
        setShowType(true);
        return;
      default:
        setShowAbility(true);
        setShowMoves(false);
        setShowType(false);
    }
  };
  useEffect(() => {
    resetPokemonInfo();
    getPokemonInfo(id);
    clearPokemonSpecies();
    getPokemonSpecies(id);
    clearEvolutionChain();
    // eslint-disable-next-line
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <section>
      <Card classNzzzame="py-1">
        <SkipPageButtons page={id} />
        <Card.Img
          variant="top"
          style={{
            width: "200px",
            margin: "0 auto",
            filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.2))",
          }}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        />
        <Card.Body>
          <Card.Title>
            <h3 className="text-center">
              # {current_pokemon?.name.toUpperCase()}
            </h3>
          </Card.Title>
          <Card.Text
            style={{ justifyContent: "space-between" }}
            className="d-flex my-4"
          >
            <Button onClick={() => showInfo("ability")}>View Abilities </Button>
            <Button onClick={() => showInfo("moves")}>View Moves</Button>
            <Button onClick={() => showInfo("type")}>View Type</Button>
          </Card.Text>
        </Card.Body>

        {showAbility && (
          <PokemonAbility info={current_pokemon} type={"ability"} />
        )}
        {showMoves && <PokemonAbility info={current_pokemon} type="move" />}
        {showType && <PokemonAbility info={current_pokemon} type="type" />}
      </Card>
      <PokemonBaseStat poke={current_pokemon} />
      <PokemonEvolve chain_url={current_pokemon_species?.evolution_chain.url} />
    </section>
  );
};

export default PokemonInfoScreen;
