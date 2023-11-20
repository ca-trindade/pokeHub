import { SearchInput } from "../SearchInput";
import { ImageContainer, ImageLogo } from "./style";

export const Navbar = () => {
  return (
    <>
      <ImageContainer>
        <ImageLogo
          src="https://fontmeme.com/permalink/231120/ce6b0931ceb8356e846a2aa0a1abadf4.png"
          alt="logotype"
        />
      </ImageContainer>
      <div>
        <SearchInput />
      </div>
    </>
  );
};
