import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import PokemonContext from "../reducers/PokemonContext";

const SkipPageButtons = ({ page }) => {
  const pokemonContext = useContext(PokemonContext);
  const { start, end } = pokemonContext;
  return (
    <Card.Text
      style={{ justifyContent: "space-between" }}
      className="d-flex my-4"
    >
      <Link
        to={`/pokemon/${
          parseInt(page) > start + 1 ? parseInt(page) - 1 : parseInt(page)
        }`}
        className="mx-3"
      >
        <i className="fas fa-arrow-left mx-2"></i>
      </Link>
      <Link
        to={`/pokemon/${
          parseInt(page) < end ? parseInt(page) + 1 : parseInt(page)
        }`}
        className="mx-3"
      >
        <i className="fas fa-arrow-right mx-2"></i>
      </Link>
    </Card.Text>
  );
};

export default SkipPageButtons;
