import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  background-color: #2979ff;
  padding: 3.5rem 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.1s ease;

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

  ${(props) =>
    props.$keyPressed &&
    `
    outline: none;
    border-color: #ffff8d;
    box-shadow: 0px 0px 30px #ffff8d;
    transform: scale(1.2);
    `}
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  margin: 1rem;
`;

export const Keyboard = styled.kbd``;

export const Audio = styled.audio``;

export const Example = styled.span``;
