const PokemonBaseStat = ({ poke }) => {
  return (
    <div className="my-4 px-2 ">
      <h2 className="text-center">Base Stats</h2>

      {poke?.stats.map(({ base_stat, stat: { name } }, index) => (
        <div
          key={index}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
          }}
        >
          <strong style={{ display: "inline-block" }} className="mx-7">
            {name.toUpperCase()} :{" "}
          </strong>
          <div className="progress w-50 mx-auto ">
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: `${base_stat}%` }}
              aria-valuenow={base_stat}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {base_stat}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonBaseStat;
