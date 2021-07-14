import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PokeItems = ({ name, url }) => {
  const pokemon_id = url.split("pokemon/")[1].split("/")[0];

  return (
    <Card className="py-3">
      <Card.Img
        variant="top"
        style={{
          width: "200px",
          margin: "0 auto",
          filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.2))",
        }}
        src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon_id}.png`}
      />
      <Card.Body>
        <Card.Title>
          <h3 className="text-center">
            {pokemon_id}# {name.toUpperCase()}
          </h3>
        </Card.Title>
        <Card.Text className="d-flex justify-content-center my-4">
          <Link to={`/pokemon/${pokemon_id}`}>
            <Button>View Details </Button>
          </Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PokeItems;
