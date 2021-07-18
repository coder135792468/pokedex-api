import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./styles/styles.scss";
const PokeItems = ({ name, id }) => {
  return (
    <Col>
      <Card
        variant="dark"
        className="py-3 my-3 mx-3"
        style={{ background: "#efefef" }}
      >
        <Card.Img
          variant="top"
          className="card_img"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        />
        <Card.Body>
          <Card.Title>
            <h6 className="text-center">
              {id}# {name.toUpperCase()}
            </h6>
          </Card.Title>
          <Card.Text className="d-flex justify-content-center my-4">
            <Link to={`/pokemon/${id}`}>
              <Button>View Details </Button>
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PokeItems;
