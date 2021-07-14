import React, { useContext, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import PokeItems from "./PokeItems";
import PokemonContext from "../reducers/PokemonContext";
import Loader from "./layouts/Loader";
const PokemonScreen = () => {
  const pokemonContext = useContext(PokemonContext);
  const { pokemons, getPokemons, filter } = pokemonContext;

  useEffect(() => {
    getPokemons();
  }, [pokemons, getPokemons, filter]);

  return pokemons.length ? (
    <section>
      {filter !== null &&
        filter?.map((ele, index) => (
          <Col key={index + 1}>
            <PokeItems name={ele.name} url={ele.url} />
          </Col>
        ))}
      <Row xs={1} md={3} className="g-4">
        {filter == null &&
          pokemons.map((ele, index) => (
            <Col key={index + 1}>
              <PokeItems name={ele.name} url={ele.url} />
            </Col>
          ))}
      </Row>
    </section>
  ) : (
    <Loader />
  );
};

export default PokemonScreen;
