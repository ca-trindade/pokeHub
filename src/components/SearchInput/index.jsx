import { useState } from "react";
import { useDispatch } from "react-redux";
import { pokemonsName } from "../../utils/pokemonsName";
import { setName } from "../../store/searchAPI/searchSlice";
import PokemonProfileModal from "../PokemonProfileModal";
import { ContainerInput, InputGo, ButtonGo, ErrorContainer } from "./style";

export const SearchInput = () => {
  const dispatch = useDispatch();
  const [nameToSearch, setNameToSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [keyForModal, setKeyForModal] = useState(0);
  const [nameToFill, setNameToFill] = useState([]);


  function handleChange(e) {
    let letter = e.target.value.toLowerCase();
    setNameToSearch(e.target.value);

    const matchingLetter = pokemonsName.find((obj) => letter in obj);

    if (matchingLetter) {
      const valuesForLetter = matchingLetter[letter];
      setNameToFill(valuesForLetter);
    } else {
      setNameToFill([]);
    }
  }

  function handleClick(nameToSearch) {
    if (typeof nameToSearch === "string" && isNaN(nameToSearch)) {
      dispatch(setName({ searchBox: nameToSearch.toLowerCase() }));
      setKeyForModal((prev) => prev + 1);
      setNameToSearch("");
      setErrorMessage("");
    } else {
      setErrorMessage("Insert a valid name");
    }
  }

  return (
    <>
      <ContainerInput>
        <InputGo
          type="text"
          id="searchPokemon"
          placeholder="Search Pokemon"
          list="pokemonName"
          value={nameToSearch}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleClick(nameToSearch);
            }
          }}
        />
        <datalist id="pokemonName">
          {nameToFill.map((names, index) => (
            <option key={index}>{names}</option>
          ))}
        </datalist>
        <ButtonGo
          data-cypress="goButton"
          type="submit"
          onClick={() => {
            handleClick(nameToSearch);
          }}
        >
          Go!
        </ButtonGo>
      </ContainerInput>
      <ErrorContainer id="errorMessage">{errorMessage}</ErrorContainer>
      {<PokemonProfileModal key={keyForModal} />}
    </>
  );
};
