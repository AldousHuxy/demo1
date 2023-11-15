import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import App from './App.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './redux/store.ts';
import { CounterProvider } from './context/CounterContext.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CounterProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CounterProvider>
    </Provider>
  </React.StrictMode>,
)
