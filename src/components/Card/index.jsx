import { useEffect } from "react";
import { getPokemonName } from "../../api/GetAxios"
import { useSelector } from "react-redux";
import { getPokemonNameSelector } from "../../store/searchAPI/selectores";


export const Card = () => {
  
const searchBox = useSelector(getPokemonNameSelector);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const data = await getPokemonName();
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getPokemon();
  }, []);

  console.log();
  return (
    <>
      <div>
        <h1>{searchBox}</h1>
      </div>
    </>
  );
};
