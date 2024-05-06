import { ChangeEvent, FocusEvent, useState } from "react";

import { nameof } from "@repo/shared/helpers";
import { ConfirmPasswordProps } from "@repo/shared/interfaces";
import { RegisterFormModel } from "@repo/shared/models";
import {
  validateConfirmPassword,
  validatePassword,
} from "@repo/shared/validations";

import ConfirmPasswordDescribedByArea from "../../../features/login/register/registerForm/confirmPasswordDescribedByArea/ConfirmPasswordDescribedByArea";
import PasswordDescribedByArea from "../../../features/login/register/registerForm/passwordDescribedByArea/PasswordDescribedByArea";
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

    const valid = validatePassword(value);
    setPasswordValid(valid);

    if (props.errors.password !== "") {
      props.resetError("password");
    }
  };

  const handleOnBlurPassword = (e: FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setPasswordFocus(false);

    const confirmValid = validateConfirmPassword(value, props.confirmPassword);
    setConfirmPasswordValid(confirmValid);
  };

  const handleOnChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    const name: string = e.target.name;

    props.setFormData((prev) => ({ ...prev, [name]: value }));

    const valid = validateConfirmPassword(props.password, value);
    setConfirmPasswordValid(valid);

    if (props.errors.confirmPassword !== "") {
      props.resetError("confirmPassword");
    }
  };

  return (
    <ErrorBoundary>
      <div>
        <div>
          <AppPasswordField
            value={props.password}
            name={nameof<RegisterFormModel>("password")}
            label="Heslo"
            required
            className="mb-3"
            error={!!props.errors.password}
            helperText={props.errors.password}
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
            name={nameof<RegisterFormModel>("confirmPassword")}
            label="Potvrdit heslo"
            required
            className="mb-3"
            error={!!props.errors.confirmPassword}
            helperText={props.errors.confirmPassword}
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
            onBlur={() => setConfirmPasswordFocus(false)}
            onFocus={() => setConfirmPasswordFocus(true)}
          />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default AppConfirmPassword;
