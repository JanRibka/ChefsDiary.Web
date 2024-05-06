import { ErrorBoundary } from "@repo/ui/components";

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
