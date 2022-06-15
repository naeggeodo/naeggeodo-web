import '@storybook/addon-console';
import GlobalStyle from '../src/styles/GlobalStyle';
import * as NextImage from 'next/image';

import { RouterContext } from 'next/dist/shared/lib/router-context';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

const customViewports = {
  iPhone5: {
    name: 'IPhone5',
    styles: {
      width: '320px',
      height: '640px',
    },
  },
  iPhone12Pro: {
    name: 'IPhone12 Pro',
    styles: {
      width: '390px',
      height: '844px',
    },
  },
  iPhoneSE: {
    name: 'IPhone SE',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  iPadAir: {
    name: 'IPad Air',
    styles: {
      width: '820px',
      height: '1180px',
    },
  },
  iPadMini: {
    name: 'IPad Mini',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
    },
  },
  viewport: {
    viewports: customViewports,
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
