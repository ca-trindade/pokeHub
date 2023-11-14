



export const PokemonList = ({ pokemon }) => {

  return (
    <div>
      {pokemon.map((item) => (
        <div key={item.name}>
          {item.name}
          <button value={item.url} onClick={(e) => console.log(e.target.value)}>
            Full Profile
          </button>
        </div>
      ))}
    </div>
  );
};


PokemonList.propTypes = {
  pokemon: PropTypes.string.isRequired,
};

