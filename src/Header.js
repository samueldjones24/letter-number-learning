import { Wrapper, Title, HomeLink, Subtitle } from "./Header.styles";

export const Header = () => {
  return (
    <Wrapper>
      <HomeLink to="/">
        <Title>Letter and Number Learning</Title>
        <Subtitle>Use the keyboard to bring letters and numbers to life</Subtitle>
      </HomeLink>
    </Wrapper>
  );
};
