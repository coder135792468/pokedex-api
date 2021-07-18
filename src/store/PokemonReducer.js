import {
  CLEAR_REGIONAL_FILTER,
  ERROR,
  FILTER,
  GET_POKEMON,
  GET_POKEMON_INFO,
  REGIONAL_POKEMON,
  REMOVE_FILTER,
  RESET_POKEMON_INFO,
  SET_LOADING,
} from "./types";
const PokemonReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case GET_POKEMON:
      return {
        ...state,
        pokemons: payload,
        loading: false,
      };

    case FILTER:
      if (state.regional_pokemon !== null) {
        let f = state.regional_pokemon.filter((ele) =>
          ele.pokemon_species.name.match(new RegExp(`${payload}`, "gi"))
        );

        return {
          ...state,
          filter: f,
        };
      } else {
        return {
          ...state,
          filter: state.pokemons.filter((ele) =>
            ele.name.match(new RegExp(`${payload}`, "gi"))
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
        regional_pokemon: payload,
        loading: false,
      };
    case GET_POKEMON_INFO:
      return {
        ...state,
        current_pokemon: payload.info,
        current_pokemon_species: payload.pokemonSpecies,
        chain: payload.pokemonEvolution,
      };

    case RESET_POKEMON_INFO:
      return {
        ...state,
        current_pokemon: null,
        current_pokemon_species: null,
        chain: null,
      };

    case CLEAR_REGIONAL_FILTER:
      return {
        ...state,
        regional_pokemon: null,
      };

    case ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default PokemonReducer;
