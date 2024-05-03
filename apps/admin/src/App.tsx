import AppRouter from "./app/routes/AppRouter";
import LoginRedirect from "./shared/components/loginRedirect/LoginRedirect";

function App() {
  return (
    <>
      <LoginRedirect>
        <AppRouter />
      </LoginRedirect>
    </>
  );
}

export default App;
