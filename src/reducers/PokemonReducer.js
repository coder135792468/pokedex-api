import { FILTER, GET_POKEMON, REMOVE_FILTER } from "../types";
const PokemonReducer = (state, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemons: action.payload,
      };
    case FILTER:
      return {
        ...state,
        filter: state.pokemons.filter((ele) =>
          ele.name.match(new RegExp(`${action.payload}`, "gi"))
        ),
      };
    case REMOVE_FILTER:
      return {
        ...state,
        filter: null,
      };

    default:
      return state;
  }
};

export default PokemonReducer;
