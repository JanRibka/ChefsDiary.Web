import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "@repo/radix-theme/ThemeProvider";
import AppTextField from "@repo/ui/AppTextField";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <Theme accentColor="red" grayColor="slate" className="h-full">
        <AppTextField value="dsf" OnChange={() => {}} />
      </Theme>
    </ThemeProvider>
  );
};

export default App;
