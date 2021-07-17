import React, { useContext, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import PokeItems from "./PokeItems";
import PokemonContext from "../reducers/PokemonContext";

import Loader from "./layouts/Loader";
import { getPokemonID, getRegionalPokemonID } from "../pokemonfunc";
const PokemonScreen = () => {
  const pokemonContext = useContext(PokemonContext);
  const {
    pokemons,
    getPokemons,
    removeFilter,
    loading,
    filter,
    regional_pokemon,
  } = pokemonContext;

  useEffect(() => {
    removeFilter();
    getPokemons();
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <section>
      <Row xs={1} md={3} className="g-4">
        {filter &&
          filter?.map((ele, index) => (
            <Col key={index + 1}>
              {regional_pokemon == null && (
                <PokeItems name={ele.name} id={getPokemonID(ele.url)} />
              )}
              {regional_pokemon && (
                <PokeItems
                  name={ele.pokemon_species.name}
                  id={getRegionalPokemonID(ele.pokemon_species.url)}
                />
              )}
            </Col>
          ))}

        {!filter &&
          regional_pokemon &&
          regional_pokemon?.map((ele, index) => (
            <Col>
              <PokeItems
                name={ele.pokemon_species.name}
                id={getRegionalPokemonID(ele.pokemon_species.url)}
              />
            </Col>
          ))}
        {!filter &&
          !regional_pokemon &&
          pokemons?.map((ele, index) => (
            <Col key={index + 1}>
              <PokeItems name={ele.name} id={getPokemonID(ele.url)} />
            </Col>
          ))}
      </Row>
    </section>
  );
};

export default PokemonScreen;
