import { useEffect, useRef, useState } from "react";
import { NUMBERS, INITIAL_LETTERS, SPACEBAR } from "./constants";
import { Card } from "./Card";
import { PageWrapper, SearchInput, ItemsWrapper } from "./Page.styles";

export const Page = ({ type }) => {
  const initialData = type === "letters" ? INITIAL_LETTERS : NUMBERS;
  const [data, setData] = useState(initialData);
  const [searchInput, setSearchInput] = useState("");
  const audioRef = useRef(null);
  const inputRef = useRef(null);

  const placeholderText =
    type === "letters" ? "Can you spell your name?" : "Can you count to ten?";

  const handleSearch = (event) => {
    const inputValue = event.target.value.toUpperCase();

    if (inputValue === "") {
      setSearchInput(inputValue);
      setData(initialData);
      return;
    }

    const cursorPosition = event.target.selectionStart;

    const splitArray = inputValue.split("");

    const searchedValues = splitArray
      .map((element) =>
        [...initialData, SPACEBAR].find(
          ({ name }) => name.toLowerCase() === element.toLowerCase()
        )
      )
      .filter(Boolean);

    setSearchInput(inputValue);
    setData(searchedValues);

    // Restore cursor position
    requestAnimationFrame(() => {
      if (inputRef.current && cursorPosition !== null) {
        inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
      }
    });
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toUpperCase(); // Normalize input
      const foundLetter = initialData.find((letter) => letter.name === key);

      if (foundLetter && foundLetter.src) {
        if (audioRef.current) {
          audioRef.current.src = foundLetter.src; // Update audio source
          audioRef.current
            .play()
            .catch((err) => console.error("Audio play failed:", err));
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [initialData]);

  return (
    <PageWrapper>
      <SearchInput
        type="text"
        id={type}
        value={searchInput}
        aria-label={`Type ${type} here`}
        onChange={(e) => handleSearch(e)}
        placeholder={placeholderText}
        ref={inputRef}
      />
      <ItemsWrapper>
        {data.map((number, index) => (
          <Card key={`${index}-${number.name}`} item={number} type={type} />
        ))}
      </ItemsWrapper>
      <audio ref={audioRef} />
    </PageWrapper>
  );
};
