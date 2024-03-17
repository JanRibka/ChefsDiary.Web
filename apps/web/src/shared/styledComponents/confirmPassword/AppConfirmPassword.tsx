import { ChangeEvent, FocusEvent, useState } from "react";

import { ConfirmPasswordProps } from "@repo/shared/interfaces";
import {
  validateConfirmPassword,
  validatePassword,
} from "@repo/shared/validations";

import ConfirmPasswordDescribedByArea from "../../../features/login/register/registerForm/confirmPasswordDescribedByArea/ConfirmPasswordDescribedByArea";
import PasswordDescribedByArea from "../../../features/login/register/registerForm/passwordDescribedByArea/PasswordDescribedByArea";
import ErrorBoundary from "../../components/errorBoundary/ErrorBoundary";
import AppPasswordField from "../passwordField/AppPasswordField";

const AppConfirmPassword = (props: ConfirmPasswordProps) => {
  // State
  const [passwordFocus, setPasswordFocus] = useState<boolean>(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] =
    useState<boolean>(false);
  const [passwordValid, setPasswordValid] = useState<boolean>(false);
  const [confirmPasswordValid, setConfirmPasswordValid] =
    useState<boolean>(false);

  // Other
  const handleOnChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    const name: string = e.target.name;

    props.setFormData((prev) => ({ ...prev, [name]: value }));

    if (passwordValid) {
      const valid = validatePassword(value);

      setPasswordValid(valid);
    }
  };

  const handleOnBlurPassword = (e: FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setPasswordFocus(false);

    const valid = validatePassword(value);
    setPasswordValid(valid);

    const confirmValid = validateConfirmPassword(value, props.confirmPassword);
    setConfirmPasswordValid(confirmValid);
  };

  const handleOnChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    const name: string = e.target.name;

    props.setFormData((prev) => ({ ...prev, [name]: value }));

    if (confirmPasswordValid) {
      const valid = validateConfirmPassword(props.password, value);

      setConfirmPasswordValid(valid);
    }
  };

  const handleOnBlurConfirmPassword = (e: FocusEvent<HTMLInputElement>) => {
    const value: string = e.target.value;

    setConfirmPasswordFocus(false);

    const valid = validateConfirmPassword(props.password, value);

    setConfirmPasswordValid(valid);
  };

  return (
    <ErrorBoundary>
      <div>
        <div>
          <AppPasswordField
            value={props.password}
            name="password"
            label="Heslo"
            required
            requiredOnlyLabel
            className="mb-3"
            error={!!props.passwordErrorMessage}
            helperText={props.passwordErrorMessage}
            autoComplete="new-password"
            ariaDescribedBy="passwordNote"
            ariaDescribedByContent={
              <PasswordDescribedByArea password={props.password} />
            }
            ariaDescribedByDisplay={
              !!props.password && passwordFocus && !passwordValid
            }
            onChange={handleOnChangePassword}
            onBlur={handleOnBlurPassword}
            onFocus={() => setPasswordFocus(true)}
          />

          <AppPasswordField
            value={props.confirmPassword}
            name="confirmPassword"
            label="Potvrdit heslo"
            required
            requiredOnlyLabel
            className="mb-3"
            error={!!props.confirmPasswordErrorMessage}
            helperText={props.confirmPasswordErrorMessage}
            autoComplete="new-password"
            ariaDescribedBy="confirmPasswordNote"
            ariaDescribedByContent={
              <ConfirmPasswordDescribedByArea
                password={props.password}
                confirmPassword={props.confirmPassword}
              />
            }
            ariaDescribedByDisplay={
              !!props.password &&
              !!props.confirmPassword &&
              confirmPasswordFocus &&
              !confirmPasswordValid
            }
            onChange={handleOnChangeConfirmPassword}
            onBlur={handleOnBlurConfirmPassword}
            onFocus={() => setConfirmPasswordFocus(true)}
          />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default AppConfirmPassword;
