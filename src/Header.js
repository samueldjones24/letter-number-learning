import { Wrapper, Title, HomeLink } from "./Header.styles";

export const Header = () => {
  return (
    <Wrapper>
      <HomeLink to="/">
        <Title>Letter and Number Learning</Title>
      </HomeLink>
    </Wrapper>
  );
};
