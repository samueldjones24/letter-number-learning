import { useEffect, useRef } from "react";
import { CardWrapper, Image, Keyboard, Example, Audio } from "./Card.styles";
import { useKeyPress, useIntersection } from "./hooks";

export const Card = ({ item, type }) => {
  const letterRef = useRef(null);
  const executeScroll = () =>
    letterRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });

  const keyPressed = useKeyPress(item.name.toLowerCase());
  const inViewport = useIntersection(letterRef, "-250px");

  useEffect(() => {
    if (keyPressed && !inViewport) executeScroll();
  }, [keyPressed]);

  return (
    <CardWrapper
      ref={letterRef}
      id={item.keycode}
      tabIndex={0}
      $keyPressed={keyPressed && inViewport}
    >
      <Keyboard>{item.name}</Keyboard>
      <Example>{item.example}</Example>
      <Audio data-key={item.keycode} src={item.src} />
      <Image src={`images/${type}/${item.name}.png`} alt={item.example} />
    </CardWrapper>
  );
};
