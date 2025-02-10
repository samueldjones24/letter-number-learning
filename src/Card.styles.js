import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  background-color: ${(props) => (props.$isNumber ? "transparent" : "#2979ff")};
  padding: 3.5rem 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.1s ease;

  p {
    margin: 0;
    padding: 0;
  }

  &:active,
  :focus,
  :visited,
  :target,
  :focus-visible {
    outline: none;
    border-color: #ffff8d;
    box-shadow: 0px 0px 30px #ffff8d;
    transform: scale(1.2);
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  margin: 1rem;

  ${(props) =>
    props.$isNumber &&
    `
  border-radius: 8px;
  width: 10rem;
  height: 15rem;
  `}
`;

export const LetterText = styled.kbd``

export const Text = styled.p``;
