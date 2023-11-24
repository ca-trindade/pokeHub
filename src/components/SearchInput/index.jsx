import { useState } from "react";
import { useNavigate  } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setName } from "../../store/searchAPI/searchSlice";
import { ContainerInput, InputGo, ButtonGo } from "./style";

export const SearchInput = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nameToSearch, setNameToSearch] = useState("");

  function handleClick() {
    if (nameToSearch.trim() !== ""){
      dispatch(setName({ searchBox: nameToSearch }));
      setNameToSearch("");
      navigate(`/pokemon/${nameToSearch}`);
    } else {
      console.warn("Field Empty");
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
    </>
  );
};
