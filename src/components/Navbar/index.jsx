import { SearchInput } from "../SearchInput";

export const Navbar = () => {
  return (
    <div>
      <div>
        <img
          // src="https://fontmeme.com/temporary/0ecddf89784f6353726037c91ae6a9bf.png"
          alt="logotype"
        />
      </div>
      <div>
        <SearchInput />
      </div>
    </div>
  );
};
