



export const PokemonList = ({ pokemon }) => {

  return (
    <div>
      {pokemon.map((item) => (
        <div key={item.name}>
          <h1>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h1>
          <button value={item.url} onClick={(e) => console.log(e.target.value)}>
            Full Profile
          </button>
        </div>
      ))}
    </div>
  );
};



