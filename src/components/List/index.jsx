import PropTypes from "prop-types";

import {Container,
  OrderList,
  ListPokemon,
  ImagePokemon,
  Title,
  ParagraphContainer,
  Span,
  Paragraph,
  ListButton,
} from "./style";
import { useDispatch } from "react-redux";
import { setName } from "../../store/searchAPI/searchSlice";


const KG_TO_GRAMS = 10;
const PRECISION = 1;

export const List = ({ pokemon }) => {
    const dispatch = useDispatch();

  function handleClick(item) {
    dispatch(setName({ searchBox: item.name }));
  }

  return (
    <Container>
      {Array.isArray(pokemon) && pokemon.map((item) => (
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
            <ListButton
              value={item.name}
              onClick={() => {
                handleClick(item);
              }}
            >
              Full Profile
            </ListButton>
          </ListPokemon>
        </OrderList>
      ))}
    </Container>
  );
};

List.propTypes = {
  pokemon: PropTypes.array.isRequired,
};
