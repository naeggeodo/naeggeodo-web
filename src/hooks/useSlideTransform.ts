import React, { Ref, RefObject, useCallback, useRef, useState } from 'react';

interface ReturnType {
  slideRef: RefObject<HTMLDivElement>;
  gestureStart: (e: React.PointerEvent<HTMLElement>) => void;
  gestureMove: (e: React.PointerEvent<HTMLElement>) => void;
  gestureEnd: () => void;
}
export function useSlideTransform(): ReturnType {
  const [initialPosition, setInitialPosition] = useState<number | null>(null);
  const [currentPosition, setCurrentPosition] = useState<number | null>(null);
  const [diff, setDiff] = useState<number | null>(null);
  const [moving, setMoving] = useState<boolean>(false);
  const [transform, setTransform] = useState<number>(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const gestureStart = useCallback<
    (e: React.PointerEvent<HTMLDivElement>) => void
  >(
    (e) => {
      setInitialPosition(e.pageX);
      setMoving(true);
      const transformMatrix = window
        .getComputedStyle(slideRef.current)
        .getPropertyValue('transform');
      if (transformMatrix !== 'none') {
        setTransform(parseInt(transformMatrix.split(',')[4].trim()));
      }
    },
    [initialPosition, moving, transform],
  );

  const gestureMove = useCallback<
    (e: React.PointerEvent<HTMLDivElement>) => void
  >(
    (e) => {
      if (moving) {
        setCurrentPosition(e.pageX);
        setDiff(currentPosition - initialPosition);
        slideRef.current.style.transform = `translateX(${transform + diff}px)`;
      }
    },
    [moving, currentPosition, diff],
  );

  const gestureEnd = () => {
    setMoving(false);
  };

  return {
    slideRef,
    gestureStart,
    gestureMove,
    gestureEnd,
  };
}
