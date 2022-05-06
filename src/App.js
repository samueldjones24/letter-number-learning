import { Link } from "react-router-dom";
import { CardWrapper, TextWrapper, Text, Card, Image } from "./App.styles";

function App() {
  return (
    <>
      <TextWrapper>
        <Text>
          Have fun learning letters (A to Z) and numbers (0 to 9)
          <br /> by pressing the keys on your keyboard!
        </Text>
      </TextWrapper>
      <TextWrapper>
        <Text>First, choose your activity:</Text>
        <CardWrapper>
          <Link to="/letters">
            <Card>
              <Text>Letters</Text>
              <Image src={`images/letters/A.png`} alt="alligator" />
            </Card>
          </Link>
          <Link to="/numbers">
            <Card>
              <Text>Numbers</Text>
              <Image src={`images/numbers/1.png`} alt="one" />
            </Card>
          </Link>
        </CardWrapper>
      </TextWrapper>
    </>
  );
}

export default App;
