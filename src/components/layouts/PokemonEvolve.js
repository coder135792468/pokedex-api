import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import PokemonContext from "../../reducers/PokemonContext";
import { getRegionalPokemonID } from "../../pokemonfunc";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PokemonEvolve = ({ chain_url }) => {
  /*https://pokeapi.co/api/v2/evolution-chain/1/ */

  const pokemonContext = useContext(PokemonContext);
  const { getEvolutionChain, clearEvolutionChain, chain } = pokemonContext;

  const getGen = () => {};
  useEffect(() => {
    if (!chain) {
      clearEvolutionChain();
      getEvolutionChain(chain_url);
    }
  }, [chain_url]);
  return (
    <div className="my-7">
      <h1 className="text-center">Evolution Chain</h1>
      <Row xs={1} md={3} className="g-4">
        {chain?.map((ele, index) => (
          <Col>
            <Card
              className="text-center px-4 mx-auto my-3 py-3"
              style={{ width: "18rem" }}
            >
              <Card.Img
                variant="top"
                src={`https://pokeres.bastionbot.org/images/pokemon/${getRegionalPokemonID(
                  ele.url
                )}.png`}
                className="mx-auto"
              />
              <Card.Body>
                <Card.Title>{ele.name.toUpperCase()}</Card.Title>
              </Card.Body>
              <Link
                className="btn btn-primary"
                to={`/pokemon/${getRegionalPokemonID(ele.url)}`}
              >
                View Details <span className="fas fa-arrow-right"></span>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PokemonEvolve;
