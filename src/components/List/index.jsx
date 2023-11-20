import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  OrderList,
  ListPokemon,
  ImagePokemon,
  Title,
  Paragraph, 
  ListButton,
} from "./style";

const KG_TO_GRAMS = 10;
const PRECISION = 1;

export const List = ({ pokemon }) => {

  return (
    <>
      {pokemon.map((item) => (
        <OrderList key={item.order}>
          <ListPokemon>
            <ImagePokemon src={item.sprites} alt={item.name} />
            <Title>
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </Title>
            <div>
              <Paragraph>
                <span className="material-symbols-outlined">weight</span>
                {item.weight.toFixed(PRECISION) / KG_TO_GRAMS} kg
              </Paragraph>
              <Paragraph>
                <span className="material-symbols-outlined">height</span>
                {item.height.toFixed(PRECISION) / KG_TO_GRAMS} meters
              </Paragraph>
            </div>
            <Link to="/pokemonProfile">
              <ListButton
                value={item.name}
                onClick={(e) => console.log(e.target.value)}
              >
                Full Profile
              </ListButton>
            </Link>
          </ListPokemon>
        </OrderList>
      ))}
    </>
  );
};

List.propTypes = {
  pokemon: PropTypes.array.isRequired,
};
