// PokemonProfileModal.jsx
import React from "react";
import PropTypes from "prop-types";
import { ModalOverlay, ModalContent, ModalCard, CardTitle, CardAnimation, CardContent, ModalButton } from "./style";
import { Card } from "../Card";

const PokemonProfileModal = ({ pokemon, closeModal }) => {
  
  return (
    <ModalOverlay isOpen={!!pokemon}>
      <ModalContent>
        { pokemon ? (
          <ModalCard>
            <CardTitle>{pokemon.name}</CardTitle>
            <CardAnimation />
            <CardContent>
              <Card pokemon={pokemon} />
            </CardContent>
          </ModalCard>
        ) : (
          <p>No Pokémon found. Please enter a valid Pokémon name.</p>
        )}
        <ModalButton onClick={closeModal}>Close</ModalButton>
      </ModalContent>
    </ModalOverlay>
  );
};

PokemonProfileModal.propTypes = {
  pokemon: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default PokemonProfileModal;
