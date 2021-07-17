import React from "react";
import { ListGroup } from "react-bootstrap";
const PokemonAbility = ({ info, type }) => {
  return (
    <ListGroup
      style={{ height: "auto", maxHeight: "200px", overflowY: "scroll" }}
      as="ul"
      className="hidden"
    >
      {type == "ability" &&
        info?.abilities.map((ele, index) => (
          <ListGroup.Item key={index} as="li">
            <i className="fas fa-star mx-3" style={{ color: "orange" }}></i>

            {ele.ability.name.toUpperCase()}
          </ListGroup.Item>
        ))}
      {type == "move" &&
        info?.moves.map((ele, index) => (
          <ListGroup.Item key={index} as="li">
            <i className="fas fa-star mx-3" style={{ color: "orange" }}></i>

            {ele.move.name.toUpperCase()}
          </ListGroup.Item>
        ))}
      {type == "type" &&
        info?.types.map((ele, index) => (
          <ListGroup.Item key={index} as="li">
            <i className="fas fa-star mx-3" style={{ color: "orange" }}></i>

            {ele.type.name.toUpperCase()}
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
};

export default PokemonAbility;
