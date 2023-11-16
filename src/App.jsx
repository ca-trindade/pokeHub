import { useEffect, useState } from "react";
import { List } from "./components/List";
import { getPokemonList } from "./api/GetAxios";


import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(6);
  

  function handleClick() {
    setStart((prevEnd) => prevEnd + 1);
    setEnd((prevEnd) => prevEnd + 6);
  }

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const data = await getPokemonList(start, end);
        setPokemon(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getPokemon();
  }, [start, end]);

  return (
    <>
      <List pokemon={pokemon} />
      <button onClick={handleClick}>More</button>
    </>
  );
}

export default App;
