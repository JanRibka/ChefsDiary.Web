import { useRegisterMutation } from "../../auth/authApi";

const useRegister = () => {
  const [register, result] = useRegisterMutation();

  const isLoading = result.isLoading || result.isFetching;

  if (result.isError) {
    // TODO: Genericka metoda pro zisk8n9 eroru. Asi byde typu key/value pair, Bude to vracet i hodnotu
  }

  //   Tento hook nem8 smysl a genericka metoda bude v Shared bude se volat po azvolan9 register

  return { register };
};

export default useRegister;
