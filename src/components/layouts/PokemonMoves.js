import React from "react";
import { Row, Col } from "react-bootstrap";

const PokemonMoves = ({ info }) => {
  return (
    <div className="moves">
      <h1 className="text-center my-4">Moves</h1>
      <Row xs={1} md={2} xl={3}>
        {info?.moves.map((ele, index) => (
          <Col key={index + 1}>
            <span className="move">
              <i className="fas fa-star mx-3" style={{ color: "orange" }}></i>
              {ele.move.name.toUpperCase()}
            </span>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PokemonMoves;
