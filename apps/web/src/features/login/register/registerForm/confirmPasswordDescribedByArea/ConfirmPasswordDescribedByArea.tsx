import { validateConfirmPassword } from "@repo/shared/validations";

interface Props {
  password: string;
  confirmPassword: string;
}

const ConfirmPasswordDescribedByArea = (props: Props) => {
  return (
    <DescribedByAreaWrapper>
      <DescribedByAreaItem
        itemValid={validateConfirmPassword(
          props.password,
          props.confirmPassword
        )}
      >
        Heslo a heslo pro potvrzení se musí shodovat
      </DescribedByAreaItem>
    </DescribedByAreaWrapper>
  );
};

export default ConfirmPasswordDescribedByArea;
