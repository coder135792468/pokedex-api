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
  // kanto: {
  //   limit: 1,
  //   offset: 151,
  // },
  // johto: {
  //   limit: 152,
  //   offset: 251,
  // },
  // hoenn: {
  //   limit: 252,
  //   offset: 386,
  // },
  // sinnoh: {
  //   limit: 387,
  //   offset: 493,
  // },
  // unova: {
  //   limit: 494,
  //   offset: 649,
  // },
  // kalos: {
  //   limit: 650,
  //   offset: 721,
  // },
  // alola: {
  //   limit: 722,
  //   offset: 807,
  // },
};

const getPokemonID = (url) => {
  return url.split("pokemon/")[1].split("/")[0];
};

const getRegionalPokemonID = (url) => {
  return url.split("pokemon-species/")[1].split("/")[0];
};

export { region_data, getPokemonID, getRegionalPokemonID };
