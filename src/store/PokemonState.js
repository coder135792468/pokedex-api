import { useReducer } from "react";
import {
  FILTER,
  GET_POKEMON,
  REMOVE_FILTER,
  REGIONAL_POKEMON,
  CLEAR_REGIONAL_FILTER,
  GET_POKEMON_INFO,
  RESET_POKEMON_INFO,
  SET_LOADING,
  ERROR,
} from "./types";
import axios from "axios";
import PokemonContext from "./PokemonContext";
import PokemonReducer from "./PokemonReducer";
import { region_data } from "../utils";
import { getGen } from "../utils";

const config = {
  headers: {
    "Content-type": "application/json",
  },
};

const PokemonState = (props) => {
  const initialState = {
    pokemons: [],
    filter: null,
    search: true,
    regional_pokemon: null,
    current_pokemon: null,
    current_pokemon_species: null,
    chain: null,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(PokemonReducer, initialState);
  const getPokemons = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=150",
        config
      );

      dispatch({
        type: GET_POKEMON,
        payload: data.results,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
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
    try {
      if (region === "none") return clearRegionalFilter();
      const regional = region_data[region];

      setLoading(true);
      const { data } = await axios.get(
        ` https://pokeapi.co/api/v2/pokedex/${regional}/`
      );
      dispatch({
        type: REGIONAL_POKEMON,
        payload: data.pokemon_entries,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };

  //clear filter for regions
  const clearRegionalFilter = () => {
    dispatch({
      type: CLEAR_REGIONAL_FILTER,
    });
  };

  //get pokemon by id
  const getPokemonInfo = async (id) => {
    setLoading(true);
    resetPokemonInfo();
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}/`
      );
      const { data: pokemonSpecies } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`,
        config
      );
      const { data: pokemonEvolution } = await axios.get(
        pokemonSpecies.evolution_chain.url,
        config
      );
      dispatch({
        type: GET_POKEMON_INFO,
        payload: {
          info: data,
          pokemonSpecies,
          pokemonEvolution: getGen(pokemonEvolution),
        },
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const resetPokemonInfo = () => {
    dispatch({
      type: RESET_POKEMON_INFO,
    });
  };

  //set laoding
  const setLoading = (isLoading) => {
    dispatch({
      type: SET_LOADING,
      payload: isLoading,
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
        loading: state.loading,
        error: state.error,
        getPokemons,
        filterPokemon,
        removeFilter,
        regionalPokemon,
        getPokemonInfo,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonState;
