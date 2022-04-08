import { Link } from "react-router-dom";
import { CardWrapper, TextWrapper, Text, Card, Image } from "./App.styles";

function App() {
  return (
    <>
      <TextWrapper>
        <Text>
          Hello, MILA! <br /> <br />
          Have fun learning your letters and numbers by pressing keys on the
          keyboard. Lots of love, Daddy x
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
              <Image src={`images/numbers/1.jpg`} alt="one" />
            </Card>
          </Link>
        </CardWrapper>
      </TextWrapper>
    </>
  );
}

export default App;
