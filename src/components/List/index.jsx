import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {Container,
  OrderList,
  ListPokemon,
  ImagePokemon,
  Title,
  ParagraphContainer, Span, 
  Paragraph, 
  ListButton,
} from "./style";

const KG_TO_GRAMS = 10;
const PRECISION = 1;

export const List = ({ pokemon }) => {

  return (
    <Container>
      {pokemon.map((item) => (
        <OrderList key={item.order}>
          <ListPokemon>
            <ImagePokemon src={item.sprites} alt={item.name} />
            <Title>
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </Title>
            <ParagraphContainer>
              <Paragraph>
                <Span className="material-symbols-outlined">weight</Span>
                {item.weight.toFixed(PRECISION) / KG_TO_GRAMS} kg
              </Paragraph>
              <Paragraph>
                <Span className="material-symbols-outlined">height</Span>
                {item.height.toFixed(PRECISION) / KG_TO_GRAMS} meters
              </Paragraph>
            </ParagraphContainer>
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
    </Container>
  );
};

List.propTypes = {
  pokemon: PropTypes.array.isRequired,
};
