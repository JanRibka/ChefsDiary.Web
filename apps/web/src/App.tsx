import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "@repo/radix-theme/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <Theme accentColor="red" grayColor="slate" className="h-full">
        Hello world
      </Theme>
    </ThemeProvider>
  );
};

export default App;
