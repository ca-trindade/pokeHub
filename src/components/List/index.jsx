import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export const List = ({ pokemon }) => {
  return (
    <div>
      {pokemon.map((item) => (
        <ol key={item.order}>
          <li>
            <img src={item.sprites} alt={item.name} />
            <h1>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h1>
            <Link to="/pokemonProfile">
              <button
                value={item.name}
                onClick={(e) => console.log(e.target.value)}
              >
                Full Profile
              </button>
            </Link>
          </li>
        </ol>
      ))}
    </div>
  );
};

List.propTypes = {
  pokemon: PropTypes.array.isRequired,
};
