import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;

  a {
    text-decoration: none;
    color: #fafafa;
  }
`;

export const TextWrapper = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  line-height: 1.4;
`;

export const Text = styled.p`
  margin-bottom: 0;
`;

export const Card = styled.div`
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
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  margin: 1rem;
`;
