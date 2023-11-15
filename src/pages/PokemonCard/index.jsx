import { useEffect, useState } from "react";
import { getPokemonCard } from "../../api/GetAxios"
import { Card } from "../../components/Card"


export const PokemonCard = () => {
    const [namePokemon, setNamePokemon] = useState([]);
    
      useEffect(() => {
        const getPokemon = async () => {
          try {
            const data = await getPokemonCard();
            setNamePokemon(data);
            //console.log(data);
          } catch (error) {
            console.error("Erro:", error);
          }
        };
        getPokemon();
      }, []);

  return (
    <>
      <Card namePokemon={namePokemon} />
    </>
  );
}
