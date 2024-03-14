import ErrorBoundary from "../../../shared/components/errorBoundary/ErrorBoundary";
import RegisterForm from "./registerForm/RegisterForm";

const Register = () => {
  return (
    <ErrorBoundary>
      <RegisterForm />
    </ErrorBoundary>
  );
};

export default Register;
