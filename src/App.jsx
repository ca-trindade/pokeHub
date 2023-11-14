import { useEffect, useState } from "react";
import { PokemonList } from "./components/PokemonList";
import { getPokemonList} from "./api/GetAxios";

import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([]);


  useEffect(() => {
    const getPokemon = async () => {
      try {
        const data = await getPokemonList();
        setPokemon(data);
      } catch (error) {
        console.error("Erro:", error);
      }
    };
    getPokemon();
  }, []);
  
  return (
    <>
      <PokemonList pokemon={pokemon} />

    </>
  );
}

export default App;
