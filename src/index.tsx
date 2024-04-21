import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { history, store } from './store/configure-store';
import { HistoryRouter } from "redux-first-history/rr6";
import { routes } from './router';

import "./styles/styles.module.scss"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={history}>{routes}</HistoryRouter>
    </Provider>
  </React.StrictMode>,
);

