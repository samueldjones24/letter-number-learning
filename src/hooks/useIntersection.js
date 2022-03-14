import { useState, useEffect } from "react";

export const useIntersection = (element, rootMargin) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const { current } = element;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin }
    );

    current && observer.observe(current);

    return () => observer.unobserve(current);
  }, []);

  return isVisible;
};
