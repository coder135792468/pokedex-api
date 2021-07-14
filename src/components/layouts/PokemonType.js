import React from "react";
import { ListGroup } from "react-bootstrap";
const PokemonType = ({ pokemonInfo }) => {
  return (
    <ListGroup
      style={{ height: "auto", maxHeight: "200px", overflow: "scroll" }}
      as="ul"
    >
      {pokemonInfo?.types.map((ele, index) => (
        <ListGroup.Item key={index} as="li">
          <i className="fas fa-star mx-3" style={{ color: "orange" }}></i>

          {ele.type.name.toUpperCase()}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default PokemonType;
