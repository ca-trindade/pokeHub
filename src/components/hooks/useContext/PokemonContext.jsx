import { createContext, useContext, useState } from "react";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const setPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <PokemonContext.Provider value={{ selectedPokemon, setPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => {
    return useContext(PokemonContext);
}