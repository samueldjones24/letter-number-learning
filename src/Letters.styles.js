import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  height: 48px;
  width: 250px;
  border-radius: 4px;
  border: 1px solid #2979ff;
  font-size: 1.5rem;
  padding: 0 8px;

  :focus-visible {
    outline: none;
    -webkit-box-shadow: 0px 0px 0px 5px rgba(41, 121, 255, 0.5);
    box-shadow: 0px 0px 0px 5px rgba(41, 121, 255, 0.5);
  }
`;

export const LettersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-items: center;
  padding: 18px 0;
`;
