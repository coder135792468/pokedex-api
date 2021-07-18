import React, { useContext, useEffect } from "react";
import { Row } from "react-bootstrap";
import PokeItems from "./PokeItems";
import PokemonContext from "../store/PokemonContext";
import { Helmet } from "react-helmet";
import Loader from "./layouts/Loader";
import { getPokemonID, getRegionalPokemonID } from "../utils";
import ScrollButton from "./layouts/ScrollButton";
import "./styles/styles.scss";
import Error from "./layouts/Error";

const PokemonScreen = () => {
  const pokemonContext = useContext(PokemonContext);
  const {
    pokemons,
    getPokemons,
    removeFilter,
    loading,
    filter,
    error,
    regional_pokemon,
  } = pokemonContext;

  useEffect(() => {
    removeFilter();
    getPokemons();
    // eslint-disable-next-line
  }, []);

  //check if regional pokemons
  const getRegion = (data) => {
    return data ? data : pokemons;
  };
  return !loading && !error ? (
    <section>
      <Helmet>
        <title>Pokedex Api</title>
        <meta name="description" content="Home screen for pokedex api"></meta>
      </Helmet>
      <Row xs={1} md={3} xl={4} className="g-4">
        {filter &&
          filter?.map(({ name, url, pokemon_species: species }, index) => (
            <PokeItems
              key={index + 1}
              name={regional_pokemon ? species.name : name}
              id={
                regional_pokemon
                  ? getRegionalPokemonID(species.url)
                  : getPokemonID(url)
              }
            />
          ))}

        {!filter &&
          getRegion(regional_pokemon)?.map(
            ({ url, name, pokemon_species: species }, index) => (
              <PokeItems
                key={index + 1}
                name={regional_pokemon ? species.name : name}
                id={
                  regional_pokemon
                    ? getRegionalPokemonID(species.url)
                    : getPokemonID(url)
                }
              />
            )
          )}
      </Row>

      <ScrollButton top={600} />
    </section>
  ) : loading ? (
    <Loader />
  ) : (
    error && <Error error={error} />
  );
};

export default PokemonScreen;
