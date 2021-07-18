import React from "react";
const propToList = {
  flying: "blue",
  grass: "green",
  water: "blue",
  psychic: "brown",
  ghost: "black",
  poison: "black",
  electric: "rgb(204, 204, 10)",
  ground: "darkblue",
  rock: "red",
  bug: "green",
  ice: "blue",
  dark: "black",
  steel: "artifact",
  dragon: "red",
  normal: "purple",
  fire: "tomato",
};

const PokemonDetailList = ({ info }) => {
  return (
    <div className="details">
      <h2 className="text-center my-2">Type</h2>
      {info?.types.map((ele, index) => (
        <span
          key={index}
          style={{ background: propToList[ele.type.name.toLowerCase()] }}
        >
          <i className="fas fa-star mx-3" style={{ color: "orange" }}></i>
          {ele.type.name.toUpperCase()}
        </span>
      ))}
    </div>
  );
};

export default PokemonDetailList;
