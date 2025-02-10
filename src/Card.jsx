import { CardWrapper, Image, LetterText, Text } from "./Card.styles";
import { SPACEBAR } from "./constants/letters";

export const Card = ({ item: { keycode, name, example }, type }) => {
  const isNumber = type === "numbers";

  return (
    <CardWrapper id={keycode} tabIndex={0} $isNumber={isNumber}>
      {keycode !== SPACEBAR.keycode ? (
        <>
          {!isNumber && (
            <>
              <LetterText>{name}</LetterText>
              <Text>{example}</Text>
            </>
          )}
          <Image
            src={`images/${type}/${name}.png`}
            alt={example}
            $isNumber={isNumber}
          />
        </>
      ) : (
        <></>
      )}
    </CardWrapper>
  );
};
