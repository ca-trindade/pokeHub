import { useState } from "react";
import { Link } from "react-router-dom";
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
      <input
        type="text"
        id="searchPokemon"
        placeholder="Search Pokemon"
        value={nameToSearch}
        onChange={(e) => setNameToSearch(e.target.value)}
      />
      <Link to="/pokemonProfile">
        <button type="submit" onClick={handleClick}>
          Search
        </button>
      </Link>
    </>
  );
};
