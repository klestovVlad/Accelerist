import '../src/style/style-sheets/fonts/GothamRnd-Medium/style.css';
import '../src/style/style-sheets/fonts/SFPro/style.css';
import '../src/style/style-sheets/fonts/rubik-v14-latin/style.css';
import '../src/style/style-sheets/reset.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './store/root-reducer';
import { theme } from './style/theme/theme';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={state.store}>
      <PersistGate loading={null} persistor={state.persist}>
        <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
