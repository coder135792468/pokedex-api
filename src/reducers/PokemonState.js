import { useReducer } from "react";
import { FILTER, GET_POKEMON, REMOVE_FILTER } from "../types";
import axios from "axios";
import PokemonContext from "./PokemonContext";
import PokemonReducer from "./PokemonReducer";

const PokemonState = (props) => {
  const initialState = {
    pokemons: [],
    filter: null,
    search: true,
  };

  const [state, dispatch] = useReducer(PokemonReducer, initialState);
  const getPokemons = async () => {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=100"
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
    console.log(state.filter);
  };
  const removeFilter = () => {
    dispatch({
      type: REMOVE_FILTER,
    });
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemons: state.pokemons,
        filter: state.filter,
        search: state.search,
        getPokemons,
        filterPokemon,
        removeFilter,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonState;
