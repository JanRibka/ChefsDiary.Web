import './index.css';
import '@radix-ui/themes/styles.css';

//TODO: Misto importu z tailwind tady dát css soubor a zkusit tam měnit --heading-font-size-adjust na .radix-themes
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Theme } from '@radix-ui/themes';

import App from './App';
import { store } from './app/store/store';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Theme accentColor="red" grayColor="slate" className="h-full">
          <App />
        </Theme>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
