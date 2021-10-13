import '../src/style/fonts/fonts.css';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './store/root-reducer';
import GlobalStyle from './style/global-styles/global-styles';
import { theme } from './style/theme/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={state.store}>
      <PersistGate loading={null} persistor={state.persist}>
        <BrowserRouter>
          <StrictMode>
            <GlobalStyle />
            <App />
          </StrictMode>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
reportWebVitals();
