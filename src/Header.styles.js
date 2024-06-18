import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 95%;
  background-color: white;
  border-radius: 8px;
  padding: 0;
  margin: 20px 0;
  border: 1px solid #2979ff;
`;

export const Title = styled.h1`
  color: #2979ff;
`;

export const Subtitle = styled.h2`
  color: #2979ff;
`;

export const HomeLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #fafafa;

  :focus-visible {
    outline: none;
    -webkit-box-shadow: 0px 0px 0px 5px rgba(41, 121, 255, 0.5);
    box-shadow: 0px 0px 0px 5px rgba(41, 121, 255, 0.5);
    border-radius: 8px;
  }
`;
