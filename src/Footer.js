import { Wrapper, Text, Link } from "./Footer.styles";

export const Footer = () => {
  return (
    <Wrapper>
      <Text>
        Images: ©{" "}
        <Link
          href="https://alphabetimals.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alphabetimals
        </Link>
      </Text>
    </Wrapper>
  );
};
