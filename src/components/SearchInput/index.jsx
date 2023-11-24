import { useState } from "react";
import { useDispatch } from "react-redux";
import { setName } from "../../store/searchAPI/searchSlice";
import PokemonProfileModal from "../PokemonProfileModal";
import { ContainerInput, InputGo, ButtonGo, ErrorContainer } from "./style";

export const SearchInput = () => {
  const dispatch = useDispatch();

  const [nameToSearch, setNameToSearch] = useState("");
  const [keyForModal, setKeyForModal] = useState(0);

  function handleClick() {
    if (
      nameToSearch !== null &&
      nameToSearch !== "" &&
      typeof nameToSearch === "string" &&
      isNaN(nameToSearch)
    ) {
      dispatch(setName({ searchBox: nameToSearch.toLowerCase() }));
      console.log("Here handleclick from input");
      setKeyForModal((prev) => prev + 1);
      setNameToSearch("");
    } else {
      const errorMessageElement = document.getElementById("errorMessage");
      if (errorMessageElement) {
        errorMessageElement.textContent = "Insert a valid name";
      }
    }
  }

  return (
    <>
      <ContainerInput>
        <InputGo
          type="text"
          id="searchPokemon"
          placeholder="Search Pokemon"
          value={nameToSearch}
          onChange={(e) => setNameToSearch(e.target.value)}
        />
        <ButtonGo type="submit" onClick={handleClick}>
          Go!
        </ButtonGo>
      </ContainerInput>
      <ErrorContainer id="errorMessage"></ErrorContainer>
      {<PokemonProfileModal key={keyForModal} />}
    </>
  );
};
