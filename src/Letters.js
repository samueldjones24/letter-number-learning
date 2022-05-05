import { LETTERS } from "./constants/letters";
import { Wrapper, LettersWrapper, SearchInput } from "./Letters.styles";
import { Card } from "./Card";
import { useEffect, useState } from "react";

const SPACEBAR_KEYCODE = "32";

export const Letters = () => {
  const initialLetters = LETTERS.filter(
    (letter) => letter.keycode !== SPACEBAR_KEYCODE
  );
  const [letters, setLetters] = useState(initialLetters);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    if (searchInput === "") return setLetters(initialLetters);

    const splitArray = searchInput.split("");

    const searchedValues = splitArray
      .map((letter) =>
        LETTERS.find((l) => l.name.toLowerCase() === letter.toLowerCase())
      )
      .filter((value) => value);

    setLetters(searchedValues);
  };

  useEffect(() => {
    handleSearch();
  }, [searchInput]);

  return (
    <Wrapper>
      <SearchInput
        type="text"
        id="search-letters"
        value={searchInput.toUpperCase()}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Try spelling your name..."
      />
      <LettersWrapper>
        {letters.map((letter) => {
          return (
            <Card
              item={letter}
              type="letters"
              key={letter.name}
              spacebarKeycode={SPACEBAR_KEYCODE}
            />
          );
        })}
      </LettersWrapper>
    </Wrapper>
  );
};
