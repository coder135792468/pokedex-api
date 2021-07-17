import {
  CLEAR_POKEMON_CHAIN,
  CLEAR_POKEMON_SPECIES,
  CLEAR_REGIONAL_FILTER,
  FILTER,
  GET_POKEMON,
  GET_POKEMON_CHAIN,
  GET_POKEMON_INFO,
  GET_POKEMON_SPECIES,
  REGIONAL_POKEMON,
  REMOVE_FILTER,
  RESET_POKEMON_INFO,
} from "../types";
const PokemonReducer = (state, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemons: action.payload,
      };

    case FILTER:
      if (state.regional_pokemon !== null) {
        let f = state.regional_pokemon.filter((ele) =>
          ele.pokemon_species.name.match(new RegExp(`${action.payload}`, "gi"))
        );
        console.log(f);
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
      return {
        ...state,
        regional_pokemon: action.payload,
      };
    case GET_POKEMON_INFO:
      return {
        ...state,
        current_pokemon: action.payload,
      };
    case GET_POKEMON_SPECIES:
      return {
        ...state,
        current_pokemon_species: action.payload,
      };
    case GET_POKEMON_CHAIN:
      return {
        ...state,
        chain: action.payload,
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
    default:
      return state;
  }
};

export default PokemonReducer;
