import { authApi } from "../../../../shared/api/auth/authApi";

const RegisterForm = () => {
  const [register] = authApi.useRegisterMutation();

  const handleRegisterOnClick = () => {
    register({
      userName: "john",
      password: "password",
      confirmPassword: "password",
    });
  };

  return (
    <>
      <button onClick={handleRegisterOnClick}>Registrovat</button>
    </>
  );
};

export default RegisterForm;
