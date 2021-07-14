import React from "react";
import { ListGroup } from "react-bootstrap";
const PokemonAbility = ({ pokemonInfo }) => {
  return (
    <ListGroup
      style={{ height: "auto", maxHeight: "200px", overflowY: "scroll" }}
      as="ul"
      className="hidden"
    >
      {pokemonInfo?.abilities.map((ele, index) => (
        <ListGroup.Item key={index} as="li">
          <i className="fas fa-star mx-3" style={{ color: "orange" }}></i>

          {ele.ability.name.toUpperCase()}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default PokemonAbility;
