const region_data = {
  none: 0,
  kanto: 2,
  johto: 3,
  hoenn: 4,
  sinnoh: 5,
  unova: 6,
  kalos: 7,
  alola: 8,

  /*  https://pokeapi.co/api/v2/pokedex/4/ */
};

const getPokemonID = (url) => {
  return url.split("pokemon/")[1].split("/")[0];
};

const getRegionalPokemonID = (url) => {
  return url.split("pokemon-species/")[1].split("/")[0];
};

export { region_data, getPokemonID, getRegionalPokemonID };
