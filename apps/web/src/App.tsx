import AppRouter from "./app/routes/AppRouter";
import LoginRedirect from "./shared/components/loginRedirect/LoginRedirect";

//TODO: Pro svg icony bude nová komponenta s tagem svg
const App = () => {
  return (
    <>
      <LoginRedirect />
      <AppRouter />
    </>
  );
};

export default App;

// TODO: DO budoucna zvážit zda nepřidat ripple na komponenty podle mui. Dělá to efekt po kliku. Zeptat se bota na toto "User jak po kliku pomocí tailwind docílit efektu vlnu na pozadí, která začíná v místě kliku?"
