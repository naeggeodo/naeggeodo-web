import { MutableRefObject } from 'react';

export function useSlideMessage() {
  const slideEvent = (
    slideBar: MutableRefObject<HTMLDivElement>,
    target: MutableRefObject<HTMLDivElement>,
  ) => {
    let initialY = 0;
    let currentY = 0;
    const grabDown = (e: PointerEvent | MouseEvent) => {
      initialY = e.pageY;
    };
    const grabMove = (e: PointerEvent | MouseEvent) => {
      if (initialY <= 0) return;
      currentY = e.pageY;
      if (currentY > initialY) {
        target.current.style.height = `${200 - (currentY - initialY)}px`;
        if (currentY - initialY > 50) {
          target.current.style.height = '30px';
          initialY = 0;
          currentY = 0;
        }
      } else {
        target.current.style.height = `${30 + (initialY - currentY)}px`;
        if (initialY - currentY > 50) {
          target.current.style.height = '200px';
          initialY = 0;
          currentY = 0;
        }
      }
    };

    if (window.PointerEvent) {
      slideBar.current.addEventListener('pointerdown', grabDown);
      slideBar.current.addEventListener('pointermove', grabMove);
    } else {
      slideBar.current.addEventListener('mousedown', grabDown);
      slideBar.current.addEventListener('mousemove', grabMove);
    }

    return () => {
      if (window.PointerEvent) {
        slideBar.current.removeEventListener('pointerdown', grabDown);
        slideBar.current.removeEventListener('pointermove', grabMove);
      } else {
        slideBar.current.removeEventListener('mousedown', grabDown);
        slideBar.current.removeEventListener('mousemove', grabMove);
      }
    };
  };

  return {
    slideEvent,
  };
}