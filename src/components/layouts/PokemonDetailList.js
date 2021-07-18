import React from "react";
import { ListGroup } from "react-bootstrap";
const propToList = {
  ability: "abilities",
  type: "types",
};

const PokemonDetailList = ({ info, type }) => {
  return (
    <ListGroup
      style={{ height: "auto", maxHeight: "200px", overflowY: "scroll" }}
      as="ul"
    >
      {info?.[propToList[type]].map((ele, index) => (
        <ListGroup.Item key={index} as="li">
          <i className="fas fa-star mx-3" style={{ color: "orange" }}></i>
          {ele[type].name.toUpperCase()}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default PokemonDetailList;
