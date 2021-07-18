import React, { useContext, useEffect } from "react";
import { Card } from "react-bootstrap";

import PokemonContext from "../store/PokemonContext";
import PokemonDetailList from "./layouts/PokemonDetailList";
import PokemonBaseStat from "./layouts/PokemonBaseStat";
import PokemonEvolve from "./layouts/PokemonEvolve";
import SkipPageButtons from "./SkipPageButtons";
import Loader from "./layouts/Loader";
import PokemonMoves from "./layouts/PokemonMoves";
import { Helmet } from "react-helmet";
import "./styles/styles.scss";
import ScrollButton from "./layouts/ScrollButton";
import Error from "./layouts/Error";
const PokemonInfoScreen = ({ match }) => {
  const pokemonContext = useContext(PokemonContext);
  const {
    loading,
    getPokemonInfo,

    current_pokemon,
    error,
  } = pokemonContext;

  const id = match.params.id;

  useEffect(() => {
    getPokemonInfo(id);
    // eslint-disable-next-line
  }, [id]);
  return !loading && !error ? (
    <section>
      <Helmet>
        <title>Pokemon Info</title>
        <meta
          name="description"
          content="Get a Single Pokemon Infomation"
        ></meta>
      </Helmet>
      <Card className="py-1" style={{ background: "#b8e6bf" }}>
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
          ></Card.Text>
        </Card.Body>
        <PokemonDetailList info={current_pokemon} />
      </Card>
      <PokemonBaseStat poke={current_pokemon} />
      <PokemonEvolve />
      <PokemonMoves info={current_pokemon} />
      <ScrollButton top={500} />
    </section>
  ) : loading ? (
    <Loader />
  ) : (
    <Error error={error} />
  );
};

export default PokemonInfoScreen;
