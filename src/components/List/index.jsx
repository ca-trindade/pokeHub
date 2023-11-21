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
import { useState } from "react";
import PokemonProfileModal from "../PokemonProfileModal/Modal";

const KG_TO_GRAMS = 10;
const PRECISION = 1;

export const List = ({ pokemon }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isModalOPen, setIsModalOpen] = useState(false);

  const openModal = (pokemon) => {
    setSelectedPokemon(pokemon);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
    setIsModalOpen(false);
  }

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
            <Link to={`/pokemon/${item.order}`}>
              <ListButton
                value={item.name}
                onClick={() => openModal(item)}
              >
                Full Profile
              </ListButton>
             </Link>
          </ListPokemon>
        </OrderList>
      ))}
      {isModalOPen && (
        <PokemonProfileModal pokemon={selectedPokemon} closeModal={closeModal} />
      )}
    </>
  );
};

List.propTypes = {
  pokemon: PropTypes.array.isRequired,
};
