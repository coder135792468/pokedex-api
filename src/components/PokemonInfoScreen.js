import React, { useContext, useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import PokemonContext from "../reducers/PokemonContext";
import PokemonAbility from "./layouts/PokemonAbility";
import SkipPageButtons from "./SkipPageButtons";
import PokemonMoves from "./layouts/PokemonMoves";
import PokemonType from "./layouts/PokemonType";
const PokemonInfoScreen = ({ match }) => {
  const pokemonContext = useContext(PokemonContext);
  const { pokemons, getPokemons } = pokemonContext;

  const id = match.params.id;
  const [showAbility, setShowAbility] = useState(true);
  const [showMoves, setShowMoves] = useState(false);
  const [showType, setShowType] = useState(false);
  const [pokemonInfo, setPokemonInfo] = useState();

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
    getPokemons();
    const getPokemonInfo = async (id) => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}/`
      );
      setPokemonInfo(data);
    };
    getPokemonInfo(id);

    // eslint-disable-next-line
  }, [match, getPokemons, id]);
  return (
    <section>
      <Card className="py-1">
        <SkipPageButtons page={id} />
        <Card.Img
          variant="top"
          style={{
            width: "200px",
            margin: "0 auto",
            filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.2))",
          }}
          src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
        />
        <Card.Body>
          <Card.Title>
            <h3 className="text-center">
              # {pokemons[id - 1]?.name.toUpperCase()}
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

        {showAbility && <PokemonAbility pokemonInfo={pokemonInfo} />}
        {showMoves && <PokemonMoves pokemonInfo={pokemonInfo} />}
        {showType && <PokemonType pokemonInfo={pokemonInfo} />}
      </Card>
    </section>
  );
};

export default PokemonInfoScreen;
