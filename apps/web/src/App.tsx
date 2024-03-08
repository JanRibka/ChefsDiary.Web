import "@radix-ui/themes/styles.css";

import { Provider } from "react-redux";

import { Theme } from "@radix-ui/themes";

import AppRouter from "./app/routes/AppRouter";
import { store } from "./app/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <Theme accentColor="red" grayColor="slate" className="h-full">
        <AppRouter />
      </Theme>
    </Provider>
  );
};

export default App;

// TODO: DO budoucna zvážit zda nepřidat ripple na komponenty podle mui. Dělá to efekt po kliku. Zeptat se bota na toto "User jak po kliku pomocí tailwind docílit efektu vlnu na pozadí, která začíná v místě kliku?"
