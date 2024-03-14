import { ChangeEvent, useState } from "react";

import { ConfirmPasswordProps } from "@repo/shared/interfaces";
import { validatePassword } from "@repo/shared/validations";

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

    props.setPassword(value);
    debugger;
    if (passwordValid) {
      const valid = validatePassword(value);

      setPasswordValid(valid);
    }
  };

  const handleOnBlurLogin = () => {
    setPasswordFocus(false);

    const valid = validatePassword(props.password);

    setPasswordValid(valid);
  };

  return (
    <ErrorBoundary>
      <div>
        <div>
          <AppPasswordField
            value={props.password}
            name="password"
            label="Heslo"
            className="mb-3"
            // required
            error={!!props.passwordErrorMessage}
            helperText={props.passwordErrorMessage}
            autoComplete="new-password"
            ariaDescribedBy="passwordNote"
            ariaDescribedByContent={props.passwordAriaDescribedByContent}
            ariaDescribedByDisplay={
              !!props.password && passwordFocus && !passwordValid
            }
            onChange={handleOnChangePassword}
            onBlur={handleOnBlurLogin}
            onFocus={() => setPasswordFocus(true)}
          />

          <AppPasswordField
            value={props.confirmPassword}
            name="confirmPassword"
            label="Potvrdit heslo"
            className="mb-3"
            // required
            error={!!props.confirmPasswordErrorMessage}
            helperText={props.confirmPasswordErrorMessage}
            autoComplete="new-password"
            ariaDescribedBy="confirmPasswordNote"
            ariaDescribedByContent={props.confirmPasswordAriaDescribedByContent}
            ariaDescribedByDisplay={
              !!props.confirmPassword &&
              confirmPasswordFocus &&
              !confirmPasswordValid
            }
            onChange={(e) => props.setConfirmPassword(e.target.value)}
            onBlur={() => setConfirmPasswordFocus(false)}
            onFocus={() => setConfirmPasswordFocus(true)}
          />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default AppConfirmPassword;
