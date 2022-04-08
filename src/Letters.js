import { LETTERS } from "./constants/letters";
import { Wrapper, LettersWrapper, SearchInput } from "./Letters.styles";
import { Card } from "./Card";
import { useEffect, useState } from "react";

export const Letters = () => {
  const [letters, setLetters] = useState(LETTERS);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (value) => {
    if (value === "") return setLetters(LETTERS);

    const splitArray = searchInput.split("");

    const searchedValues = splitArray
      .map((letter) =>
        LETTERS.find((l) => l.name.toLowerCase() === letter.toLowerCase())
      )
      .filter((value) => value);

    setLetters(searchedValues);
  };

  useEffect(() => {
    handleSearch(searchInput);
  }, [searchInput]);

  return (
    <Wrapper>
      <SearchInput
        type="text"
        id="search-letters"
        value={searchInput.toUpperCase()}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <LettersWrapper>
        {letters.map((letter) => {
          return <Card item={letter} type="letters" />;
        })}
      </LettersWrapper>
    </Wrapper>
  );
};
