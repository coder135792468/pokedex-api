import React, { useContext, useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

import PokemonContext from "../store/PokemonContext";
import PokemonDetailList from "./layouts/PokemonDetailList";
import PokemonBaseStat from "./layouts/PokemonBaseStat";
import PokemonEvolve from "./layouts/PokemonEvolve";
import SkipPageButtons from "./SkipPageButtons";
import Loader from "./layouts/Loader";
import PokemonMoves from "./layouts/PokemonMoves";
import { Helmet } from "react-helmet";
import "./styles/styles.scss";
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
    error,
  } = pokemonContext;

  const id = match.params.id;
  const [showInfoType, setShowInfoType] = useState("ability");

  useEffect(() => {
    resetPokemonInfo();
    getPokemonInfo(id);
    clearPokemonSpecies();
    getPokemonSpecies(id);
    clearEvolutionChain();
    // eslint-disable-next-line
  }, [id]);
  return loading && !error ? (
    <Loader />
  ) : (
    <section>
      <Helmet>
        <title>Pokemon Info</title>
        <meta
          name="description"
          content="Get a Single Pokemon Infomation"
        ></meta>
      </Helmet>
      <Card className="py-1">
        <SkipPageButtons page={id} />
        <Card.Img
          variant="top"
          className="card_img"
          style={{ width: "18rem" }}
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
            <Button onClick={() => setShowInfoType("ability")}>
              View Abilities
            </Button>
            <Button onClick={() => setShowInfoType("type")}>View Type</Button>
          </Card.Text>
        </Card.Body>
        <PokemonDetailList info={current_pokemon} type={showInfoType} />
      </Card>
      <PokemonBaseStat poke={current_pokemon} />
      <PokemonEvolve chain_url={current_pokemon_species?.evolution_chain.url} />
      <PokemonMoves info={current_pokemon} />
    </section>
  );
};

export default PokemonInfoScreen;
