import React, { ReactNode } from 'react';
import Link from 'next/link';
import { Transition, TransitionGroup } from 'react-transition-group';
import { useRouter } from 'next/router';

interface Props {
  children: ReactNode;
}

const TIMEOUT = 100;
const getTransitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 0,
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 0,
  },
};

const AppLayout = ({ children }: Props) => {
  const router = useRouter();

  return (
    <>
      <TransitionGroup style={{ position: 'relative' }}>
        <Transition
          key={router.pathname}
          timeout={{
            enter: TIMEOUT,
            exit: TIMEOUT,
          }}>
          {(status) => (
            <div
              style={{
                ...getTransitionStyles[status],
              }}>
              {children}
            </div>
          )}
        </Transition>
      </TransitionGroup>
    </>
  );
};

export default AppLayout;
