import { useEffect, useState } from "react";
import { List } from "./components/List";
import { getPokemonList} from "./api/GetAxios";

import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([]);


  useEffect(() => {
    const getPokemon = async () => {
      try {
        const data = await getPokemonList(1, 6);
        setPokemon(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getPokemon();
  }, []);
  
  return (
    <>

        <List pokemon={pokemon} />

    </>
  );
}

export default App;
