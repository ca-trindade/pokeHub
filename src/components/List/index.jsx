import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {Container,
  OrderList,
  ListPokemon,
  ImagePokemon,
  Title,
  ParagraphContainer,
  Span,
  Paragraph,
  ListButton,
  FavoriteButton,
} from "./style";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setName } from "../../store/searchAPI/searchSlice";
import PokemonProfileModal from "../PokemonProfileModal";
import { PokemonFavorites } from "../PokemonFavorites";

const KG_TO_GRAMS = 10;
const PRECISION = 1;

export const List = ({ pokemon }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isModalOPen, setIsModalOpen] = useState(false);
  const [favorites, setFavorite] = useState(null);

  function handleClick(item) {
    dispatch(setName({ searchBox: item.name }));
    setIsModalOpen(true);
  }

  const handleFavorite = (item) => {
    const isFavorite = favorites.some((fav) => fav.name === item.name);

    if (isFavorite) {
      setFavorite(favorites.filter((fav) => fav.name !== item.name));
    } else {
      console.log("call to api: ", item);
      setFavorite([...favorites, item]);
      navigate("/favorites");
    }
  }

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/");
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
            <ListButton
              value={item.name}
              onClick={() => {
                handleClick(item);
              }}
            >
              Full Profile
            </ListButton>
            <FavoriteButton onClick={() => handleFavorite(item)}> 
                {favorites.some((fav) => fav.name === item.name) ? '❤️' : '🤍'}
            </FavoriteButton>
          </ListPokemon>
        </OrderList>
      ))}
      {isModalOPen && <PokemonProfileModal closeModal={closeModal} />}
      {<PokemonFavorites favorites={favorites}></PokemonFavorites>}
    </Container>
  );
};

List.propTypes = {
  pokemon: PropTypes.array.isRequired,
};
