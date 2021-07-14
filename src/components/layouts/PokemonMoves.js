import React from "react";
import { ListGroup } from "react-bootstrap";
const PokemonMoves = ({ pokemonInfo }) => {
  return (
    <ListGroup
      style={{ height: "auto", maxHeight: "300px", overflow: "scroll" }}
      as="ul"
    >
      {pokemonInfo?.moves.map((ele, index) => (
        <ListGroup.Item key={index} as="li">
          <i className="fas fa-star mx-3" style={{ color: "orange" }}></i>

          {ele.move.name.toUpperCase()}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default PokemonMoves;
