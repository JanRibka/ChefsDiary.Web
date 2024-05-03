import ErrorBoundary from "../../../shared/components/errorBoundary/ErrorBoundary";
import CreateAccount from "./createAccount/CreateAccount";
import LoginForm from "./loginForm/LoginForm";
import LoginSocial from "./loginSocial/LoginSocial";

const Login = () => {
  return (
    <ErrorBoundary>
      <LoginForm />
      <LoginSocial />
      <CreateAccount />
    </ErrorBoundary>
  );
};

export default Login;
