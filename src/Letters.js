import { LETTERS } from "./constants/letters";
import { Wrapper } from "./Letters.styles";
import { Card } from "./Card";

export const Letters = () => {
  return (
    <Wrapper>
      {LETTERS.map((letter) => {
        return <Card item={letter} type="letters" />;
      })}
    </Wrapper>
  );
};
