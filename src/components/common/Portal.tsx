import React from 'react';
import ReactDOM from 'react-dom';

const Portal = ({
  children,
  selector,
}: {
  children: JSX.Element | JSX.Element[];
  selector: string;
}) => {
  const element =
    typeof window !== 'undefined' && document.getElementById(selector);

  return element && children ? ReactDOM.createPortal(children, element) : null;
};

export default Portal;
