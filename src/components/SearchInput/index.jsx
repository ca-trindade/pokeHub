import { useState } from "react";
import { useDispatch } from "react-redux";
import { setName } from "../../store/searchAPI/searchSlice";
import PokemonProfileModal from "../PokemonProfileModal";
import { ContainerInput, InputGo, ButtonGo, ErrorContainer } from "./style";

export const SearchInput = () => {
  const dispatch = useDispatch();
  const [nameToSearch, setNameToSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [keyForModal, setKeyForModal] = useState(0);

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
          value={nameToSearch}
          onChange={(e) => setNameToSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleClick(nameToSearch);
            }
          }}
        />
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
