import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import {Container,
  OrderList,
  ListPokemon,
  ImagePokemon,
  Title,
  ParagraphContainer, Span, 
  Paragraph, 
  ListButton,
} from "./style";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getName } from "../../store/searchAPI/searchSlice";
import PokemonProfileModal from "../PokemonProfileModal";

const KG_TO_GRAMS = 10;
const PRECISION = 1;

export const List = ({ pokemon }) => {
    const dispatch = useDispatch();

  const [isModalOPen, setIsModalOpen] = useState(false);

  function handleClick(item) {
    dispatch(getName({ searchBox: item.name }));
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

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
              <ListButton value={item.name} onClick={()=>{handleClick(item)}}>
                Full Profile
              </ListButton>
          </ListPokemon>
        </OrderList>
      ))}
      {isModalOPen && (
        <PokemonProfileModal
          closeModal={closeModal}
        />
      )}
    </Container>
  );
};

List.propTypes = {
  pokemon: PropTypes.array.isRequired,
};
