import { PointerEvent, RefObject, useCallback, useEffect, useRef } from 'react';

interface ReturnType {
  slideRef: RefObject<HTMLDivElement>;
  gestureStart: (e: PointerEvent) => void;
  gestureMove: (e: PointerEvent) => void;
  gestureFinish: () => void;
}

export function useSlideTransform(): ReturnType {
  const slideRef = useRef<HTMLDivElement>(null);
  let isDown = false;
  let initialX: number;
  let scrollLeft: number;

  const gestureStart = useCallback<(e: PointerEvent | MouseEvent) => void>(
    (e) => {
      isDown = true;
      initialX = e.pageX - slideRef.current.offsetLeft;
      scrollLeft = slideRef.current.scrollLeft;
    },
    [],
  );

  const gestureMove = useCallback<(e: PointerEvent | MouseEvent) => void>(
    (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slideRef.current.offsetLeft;
      const move = (x - initialX) * 1.5;

      slideRef.current.scrollLeft = scrollLeft - move;
    },
    [],
  );

  const gestureFinish = () => {
    isDown = false;
  };

  useEffect(() => {
    slideRef.current.addEventListener('pointerdown', gestureStart);
    slideRef.current.addEventListener('pointermove', gestureMove);
    slideRef.current.addEventListener('pointerleave', gestureFinish);
    slideRef.current.addEventListener('pointerup', gestureFinish);

    return () => {
      slideRef.current.removeEventListener('pointerdown', gestureStart);
      slideRef.current.removeEventListener('pointermove', gestureMove);
      slideRef.current.removeEventListener('pointerleave', gestureFinish);
      slideRef.current.removeEventListener('pointerup', gestureFinish);
    };
  }, []);

  return {
    slideRef,
    gestureStart,
    gestureMove,
    gestureFinish,
  };
}
