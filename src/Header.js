import { Wrapper, Title, HomeLink } from "./Header.styles";

export const Header = () => {
  return (
    <Wrapper>
      <HomeLink to="/">
        <Title>Letters & Numbers Learning</Title>
      </HomeLink>
    </Wrapper>
  );
};
