import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { List } from "../../components/List";
import { getPokemonList } from "../../api/GetAxios";
import { getPokemonApi } from "../../store/dataAPI/dataAPISlice";
import { Navbar } from "../../components/Navbar";
import { Card } from "../../components/Card";
import { Loading } from "../Loading";
import { Container, ButtonContainer, ShowMoreButton } from "./style";

function App() {
  const dispatch = useDispatch();
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
        dispatch(getPokemonApi({ pokemonDataFromApi: data }));
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getPokemon();
  }, [dispatch, start, end]);

  return (
    <>
      <Navbar />
      {pokemon.length === 0 ? (
        <Container>
          <Loading />
        </Container>
      ) : (
        <Card />
      )}
      <List pokemon={pokemon} />
      <ButtonContainer>
        <ShowMoreButton onClick={handleClick}>More</ShowMoreButton>
      </ButtonContainer>
    </>
  );
}

export default App;
