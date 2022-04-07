import { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../modules';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootReducer, composeWithDevTools());
const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default app;
