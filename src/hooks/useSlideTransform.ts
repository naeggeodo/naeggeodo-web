import React, {
  PointerEvent,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

interface ReturnType {
  slideRef: RefObject<HTMLDivElement>;
  gestureStart: (e: PointerEvent<HTMLElement> | MouseEvent) => void;
  gestureMove: (e: PointerEvent<HTMLElement> | MouseEvent) => void;
  gestureEnd: () => void;
}

export function useSlideTransform(): ReturnType {
  const [initialPosition, setInitialPosition] = useState<number | null>(null);
  const [currentPosition, setCurrentPosition] = useState<number | null>(null);
  const [diff, setDiff] = useState<number | null>(null);
  const [moving, setMoving] = useState<boolean>(false);
  const [transform, setTransform] = useState<number>(0);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.PointerEvent) {
      slideRef.current.addEventListener('pointerdown', gestureStart);
      slideRef.current.addEventListener('pointermove', gestureMove);
      slideRef.current.addEventListener('pointerup', gestureEnd);
    } else {
      slideRef.current.addEventListener('mousedown', gestureStart);
      slideRef.current.addEventListener('mousemove', gestureMove);
      slideRef.current.addEventListener('mouseup', gestureEnd);
    }
    return () => {
      slideRef.current.addEventListener('pointerdown', gestureStart);
      slideRef.current.addEventListener('pointermove', gestureMove);
      slideRef.current.addEventListener('pointerup', gestureEnd);
      slideRef.current.removeEventListener('mousedown', gestureStart);
      slideRef.current.removeEventListener('mousemove', gestureMove);
      slideRef.current.removeEventListener('mouseup', gestureEnd);
    };
  }, [currentPosition, moving]);

  const gestureStart = useCallback<(e: PointerEvent | MouseEvent) => void>(
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

  const gestureMove = useCallback<(e: PointerEvent | MouseEvent) => void>(
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
