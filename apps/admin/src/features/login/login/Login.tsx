import ErrorBoundary from "../../../shared/components/errorBoundary/ErrorBoundary";
import LoginForm from "./loginForm/LoginForm";
import LoginSocial from "./loginSocial/LoginSocial";

const Login = () => {
  return (
    <ErrorBoundary>
      <LoginForm />
      <LoginSocial />
    </ErrorBoundary>
  );
};

export default Login;
