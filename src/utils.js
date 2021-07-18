const region_data = {
  none: 0,
  kanto: 2,
  johto: 3,
  hoenn: 4,
  sinnoh: 5,
  unova: 8,
  kalos: 12,
  alola: 16,

  /*  https://pokeapi.co/api/v2/pokedex/4/ */
};

const getPokemonID = (url) => {
  return url.split("pokemon/")[1].split("/")[0];
};

const getRegionalPokemonID = (url) => {
  return url.split("pokemon-species/")[1].split("/")[0];
};

const getGen = (data) => {
  const gen = [];
  let chain = data.chain;
  const addGen = () => {
    gen.push(chain.species);
    if (chain.evolves_to.length !== 0) {
      chain = chain.evolves_to[0];
      addGen();
    } else {
      return;
    }
  };
  addGen();
  return gen;
};

export { region_data, getPokemonID, getRegionalPokemonID, getGen };
