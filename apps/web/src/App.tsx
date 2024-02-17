import "@radix-ui/themes/styles.css";

import { Provider } from "react-redux";

import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "@repo/radix-theme/ThemeProvider";

import AppRouter from "./app/routes/AppRouter";
import { store } from "./app/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="light" storageKey="ui-theme">
        <Theme accentColor="red" grayColor="slate" className="h-full">
          <AppRouter />
        </Theme>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
