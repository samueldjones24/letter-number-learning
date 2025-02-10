import { Wrapper, Text, Link } from "./Footer.styles";

export const Footer = () => {
  return (
    <Wrapper>
      <Text>
        © Images:{" "}
        <Link
          href="https://alphabetimals.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alphabetimals
        </Link>{" "}
        &{" "}
        <Link
          href="https://stock.adobe.com/uk/contributor/208793437/olga?load_type=author&prev_url=detail"
          target="_blank"
          rel="noopener noreferrer"
        >
          Olga
        </Link>
      </Text>
      <Text>|</Text>
      <Text>
        Audio:{" "}
        <Link
          href="https://freesound.org/people/tim.kahn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Freesound
        </Link>
      </Text>
      <Text>|</Text>
      <Text>
        Code:{" "}
        <Link
          href="https://www.linkedin.com/in/samueldjones24/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Samuel Jones
        </Link>
      </Text>
    </Wrapper>
  );
};
