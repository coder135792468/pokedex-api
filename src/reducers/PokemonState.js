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
  SET_LOADING,
  ERROR,
} from "../types";
import axios from "axios";
import PokemonContext from "./PokemonContext";
import PokemonReducer from "./PokemonReducer";
import { region_data } from "../pokemonfunc";
import { getGen } from "../pokemonfunc";
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
    start: 1,
    end: 150,
  };

  const [state, dispatch] = useReducer(PokemonReducer, initialState);
  const getPokemons = async () => {
    try {
      setLoading();
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
    } catch (error) {
      dispatch({
        type: ERROR,
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
      if (region == "none") return clearRegionalFilter();
      const regional = region_data[region];
      // const { limit, offset } = regional;
      setLoading();
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
    try {
      setLoading();
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}/`
      );
      dispatch({
        type: GET_POKEMON_INFO,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
      });
    }
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

    try {
      // );
      setLoading();
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
    } catch (error) {
      dispatch({
        type: ERROR,
      });
    }
  };
  const clearPokemonSpecies = () => {
    dispatch({
      type: CLEAR_POKEMON_SPECIES,
    });
  };

  //get pokemon evolution chain
  const getEvolutionChain = async (url) => {
    try {
      setLoading();
      const { data } = await axios.get(url);

      dispatch({
        type: GET_POKEMON_CHAIN,
        payload: getGen(data),
      });
    } catch (error) {
      dispatch({
        type: ERROR,
      });
    }
  };

  //clear pokemon ecolution chain
  const clearEvolutionChain = () => {
    dispatch({
      type: CLEAR_POKEMON_CHAIN,
    });
  };

  //set laoding
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
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
        start: state.start,
        end: state.end,
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
