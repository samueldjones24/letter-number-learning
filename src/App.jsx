import { Link } from "react-router-dom";
import { CardWrapper, Wrapper, Text, Card, Image } from "./App.styles";

export const App = () => (
  <Wrapper>
      <Text>
        Choose an area below to explore with your little one
      </Text>
      <CardWrapper>
        <Link to="/letters">
          <Card>
            <Text>Letters</Text>
            <Image src={`images/letters/A.png`} alt="A for alligator" />
          </Card>
        </Link>
        <Link to="/numbers">
          <Card $isNumber>
            <Text>Numbers</Text>
            <Image src={`images/numbers/1.png`} alt="one fish" $isNumber />
          </Card>
        </Link>
      </CardWrapper>
      <Text>💡 Tip for grown ups: turn up the sound 🔊</Text>
  </Wrapper>
);
