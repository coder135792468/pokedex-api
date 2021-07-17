import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import {
  CLEAR_POKEMON_CHAIN,
  CLEAR_POKEMON_SPECIES,
  CLEAR_REGIONAL_FILTER,
  ERROR,
  FILTER,
  GET_POKEMON,
  GET_POKEMON_CHAIN,
  GET_POKEMON_INFO,
  GET_POKEMON_SPECIES,
  REGIONAL_POKEMON,
  REMOVE_FILTER,
  RESET_POKEMON_INFO,
  SET_LOADING,
} from "../types";
import { getPokemonID, getRegionalPokemonID } from "../pokemonfunc";
const PokemonReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_POKEMON:
      return {
        ...state,
        pokemons: action.payload,
        start: getPokemonID(action.payload[0].url),
        end: getPokemonID(action.payload[action.payload.length - 1].url),
        loading: false,
      };

    case FILTER:
      if (state.regional_pokemon !== null) {
        let f = state.regional_pokemon.filter((ele) =>
          ele.pokemon_species.name.match(new RegExp(`${action.payload}`, "gi"))
        );
        // console.log(f);
        return {
          ...state,
          filter: f,
        };
      } else {
        return {
          ...state,
          filter: state.pokemons.filter((ele) =>
            ele.name.match(new RegExp(`${action.payload}`, "gi"))
          ),
        };
      }
    case REMOVE_FILTER:
      return {
        ...state,
        filter: null,
      };
    case REGIONAL_POKEMON:
      console.log(action.payload[0]);
      return {
        ...state,
        regional_pokemon: action.payload,
        start: getRegionalPokemonID(action.payload[0].pokemon_species.url),
        end: getRegionalPokemonID(
          action.payload[action.payload.length - 1].pokemon_species.url
        ),
        loading: false,
      };
    case GET_POKEMON_INFO:
      return {
        ...state,
        current_pokemon: action.payload,
        loading: false,
      };
    case GET_POKEMON_SPECIES:
      return {
        ...state,
        current_pokemon_species: action.payload,
        loading: false,
      };
    case GET_POKEMON_CHAIN:
      return {
        ...state,
        chain: action.payload,
        loading: false,
      };
    case RESET_POKEMON_INFO:
      return {
        ...state,
        current_pokemon: null,
      };
    case CLEAR_POKEMON_CHAIN:
      return {
        ...state,
        chain: null,
      };

    case CLEAR_REGIONAL_FILTER:
      return {
        ...state,
        regional_pokemon: null,
      };
    case CLEAR_POKEMON_SPECIES:
      return {
        ...state,
        current_pokemon_species: null,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default PokemonReducer;
