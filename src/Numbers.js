import { NUMBERS } from "./constants/numbers";
import { Wrapper } from "./Numbers.styles";
import { Card } from "./Card";

export const Numbers = () => {
  return (
    <Wrapper>
      {NUMBERS.map((letter) => {
        return <Card item={letter} type="numbers" />;
      })}
    </Wrapper>
  );
};
