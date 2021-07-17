import React from "react";

const PokemonBaseStat = ({ poke }) => {
  return (
    <div className="my-4">
      <h2 className="text-center">Base Stats</h2>

      {poke?.stats.map((ele, index) => (
        <div
          key={index}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            placeItems: "center",
          }}
        >
          <strong style={{ display: "inline-block" }} className="mx-7">
            {ele.stat.name.toUpperCase()} :{" "}
          </strong>
          <div className="progress w-50 mx-auto ">
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: `${ele.base_stat}%` }}
              aria-valuenow={ele.base_stat}
              aria-aria-valuemin="0"
              aria-valuemax="100"
            >
              {ele.base_stat}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonBaseStat;
