import { Wrapper, Title, HomeLink, Subtitle } from "./Header.styles";

export const Header = () => (
  <Wrapper>
    <HomeLink to="/">
      <Title>Letter and Number Learning</Title>
    </HomeLink>
    <Subtitle>Bring letters and numbers to life!</Subtitle>
  </Wrapper>
);
