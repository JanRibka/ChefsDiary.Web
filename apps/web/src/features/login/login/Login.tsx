import ErrorBoundary from "../../../shared/components/errorBoundary/ErrorBoundary";
import LoginForm from "./loginForm/LoginForm";

const Login = () => {
  return (
    <ErrorBoundary>
      <LoginForm />
    </ErrorBoundary>
  );
};

export default Login;
