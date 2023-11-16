import { useState } from "react";
import { useDispatch } from "react-redux";
import { getName } from "../../store/searchAPI/searchSlice";


export const SearchInput = () => {
  const dispatch = useDispatch();


  const [nameToSearch, setNameToSearch] = useState("");

    function handleClick() {
        dispatch(getName({ searchBox: nameToSearch }));
        setNameToSearch("");
  }

  return (
    <>
      <label htmlFor="searchPokemon">Search Pokemon:</label>
      <input
        type="text"
        id="searchPokemon"
        value={nameToSearch}
        onChange={(e) => setNameToSearch(e.target.value)}
      />

      <button type="submit" onClick={handleClick}>
        Search
      </button>
    </>
  );
};
