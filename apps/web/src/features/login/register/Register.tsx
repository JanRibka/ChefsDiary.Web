import LoginUser from "./loginUser/LoginUser";
import RegisterForm from "./registerForm/RegisterForm";
import RegisterSocial from "./registerSocial/RegisterSocial";

const Register = () => {
  return (
    <ErrorBoundary>
      <RegisterForm />
      <RegisterSocial />
      <LoginUser />
    </ErrorBoundary>
  );
};

export default Register;
