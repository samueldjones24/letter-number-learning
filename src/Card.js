import { useEffect, useRef } from "react";
import {
  CardWrapper,
  Image,
  Keyboard,
  Example,
  StyledAudio,
} from "./Card.styles";
import { useKeyPress, useIntersection } from "./hooks";

export const Card = ({ item, type, spacebarKeycode }) => {
  const audioRef = useRef(new Audio(item.src));
  const letterRef = useRef(null);

  const executeScroll = () =>
    letterRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });

  const keyPressed = useKeyPress(item.name.toLowerCase());
  const inViewport = useIntersection(letterRef, "0px");

  useEffect(() => {
    const audioRefCurrent = audioRef.current;

    if (keyPressed && !inViewport) executeScroll();
    if (keyPressed && inViewport) audioRefCurrent.play();

    return () => {
      audioRefCurrent.pause();
    };
  }, [keyPressed]);

  const imageFileExtension = type === "letters" ? "png" : "jpg";

  return (
    <CardWrapper
      ref={letterRef}
      id={item.keycode}
      tabIndex={0}
      $keyPressed={keyPressed && inViewport}
    >
      {item.keycode !== spacebarKeycode ? (
        <>
          <Keyboard>{item.name}</Keyboard>
          <Example>{item.example}</Example>
          <StyledAudio data-key={item.keycode} src={item.src} ref={audioRef} />
          <Image
            src={`images/${type}/${item.name}.${imageFileExtension}`}
            alt={item.example}
          />
        </>
      ) : (
        <></>
      )}
    </CardWrapper>
  );
};
