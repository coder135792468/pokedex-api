import { useReducer } from "react";
import {
  FILTER,
  GET_POKEMON,
  REMOVE_FILTER,
  REGIONAL_POKEMON,
  CLEAR_REGIONAL_FILTER,
  GET_POKEMON_INFO,
  RESET_POKEMON_INFO,
  GET_POKEMON_SPECIES,
  CLEAR_POKEMON_SPECIES,
  GET_POKEMON_CHAIN,
  CLEAR_POKEMON_CHAIN,
} from "../types";
import axios from "axios";
import PokemonContext from "./PokemonContext";
import PokemonReducer from "./PokemonReducer";
import { region_data } from "../pokemonfunc";
const PokemonState = (props) => {
  const initialState = {
    pokemons: [],
    filter: null,
    search: true,
    regional_pokemon: null,
    current_pokemon: null,
    current_pokemon_species: null,
    chain: null,
  };

  const [state, dispatch] = useReducer(PokemonReducer, initialState);
  const getPokemons = async () => {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=150",
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    dispatch({
      type: GET_POKEMON,
      payload: data.results,
    });
  };

  const filterPokemon = (text) => {
    dispatch({
      type: FILTER,
      payload: text,
    });
  };
  const removeFilter = () => {
    dispatch({
      type: REMOVE_FILTER,
    });
  };

  const regionalPokemon = async (region) => {
    if (region == "none") return clearRegionalFilter();
    const regional = region_data[region];
    // const { limit, offset } = regional;

    const { data } = await axios.get(
      ` https://pokeapi.co/api/v2/pokedex/${regional}/`
    );
    dispatch({
      type: REGIONAL_POKEMON,
      payload: data.pokemon_entries,
    });
  };

  //clear filter for regions
  const clearRegionalFilter = () => {
    dispatch({
      type: CLEAR_REGIONAL_FILTER,
    });
  };

  //get pokemon by id
  const getPokemonInfo = async (id) => {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}/`
    );
    dispatch({
      type: GET_POKEMON_INFO,
      payload: data,
    });
  };

  const resetPokemonInfo = () => {
    dispatch({
      type: RESET_POKEMON_INFO,
    });
  };

  //get pokemon species
  const getPokemonSpecies = async (id) => {
    // const { data } = await fetch(
    //   `https://pokeapi.co/api/v2/evolution-chain/${id}/`
    // );
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    dispatch({
      type: GET_POKEMON_SPECIES,
      payload: data,
    });
  };
  const clearPokemonSpecies = () => {
    dispatch({
      type: CLEAR_POKEMON_SPECIES,
    });
  };

  //get pokemon evolution chain
  const getEvolutionChain = async (url) => {
    // axios
    //   .get(chain)
    //   .then(function (res) {
    //     dispatch({
    //       type: GET_POKEMON_CHAIN,
    //       payload: res.data,
    //     });
    //   })
    //   .catch(function (res) {
    //     if (res instanceof Error) {
    //       console.log(res.message);
    //     } else {
    //       console.log(res.data);
    //     }
    //   });
    try {
      const { data } = await axios.get(url);
      const gen = [];
      gen.push(data.chain.species);

      if (data.chain.evolves_to) {
        let newChain = data.chain.evolves_to[0];
        gen.push(newChain.species);
        if (newChain.evolves_to) {
          gen.push(newChain.evolves_to[0].species);
        }
      }

      dispatch({
        type: GET_POKEMON_CHAIN,
        payload: gen,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  //clear pokemon ecolution chain
  const clearEvolutionChain = () => {
    dispatch({
      type: CLEAR_POKEMON_CHAIN,
    });
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemons: state.pokemons,
        filter: state.filter,
        search: state.search,
        current_pokemon: state.current_pokemon,
        regional_pokemon: state.regional_pokemon,
        current_pokemon_species: state.current_pokemon_species,
        chain: state.chain,
        getPokemons,
        filterPokemon,
        removeFilter,
        regionalPokemon,
        getPokemonInfo,
        resetPokemonInfo,
        getPokemonSpecies,
        clearPokemonSpecies,
        getEvolutionChain,
        clearEvolutionChain,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonState;
