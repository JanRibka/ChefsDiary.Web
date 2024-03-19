import { FocusEvent, useEffect, useRef, useState } from "react";

import * as Checkbox from "@radix-ui/react-checkbox";
import { LoginFormErrorModel, LoginFormModel } from "@repo/shared/models";
import { validateLoginForm } from "@repo/shared/validations";

import { useAuthSlice } from "../../../../app/store/auth/useAuthSlice";
import useLogin from "../../../../shared/api/apiHooks/auth/useLogin";
import AppForm from "../../../../shared/components/form/AppForm";
import AppSubmitButton from "../../../../shared/components/submitButton/AppSubmitButton";
import AppAnchor from "../../../../shared/styledComponents/anchor/AppAnchor";
import AppCheckbox from "../../../../shared/styledComponents/checkbox/AppCheckbox";
import AppFormError from "../../../../shared/styledComponents/formError/AppFormError";
import AppFormHeading from "../../../../shared/styledComponents/formHeading/AppFormHeading";
import AppHoverCard from "../../../../shared/styledComponents/hoverCard/AppHoverCard";
import AppPasswordField from "../../../../shared/styledComponents/passwordField/AppPasswordField";
import AppTextField from "../../../../shared/styledComponents/textField/AppTextField";

const LoginForm = () => {
  // References
  const refLogin = useRef<HTMLInputElement>(null);
  const refErrorMessage = useRef<HTMLParagraphElement>(null);

  // State
  const [formData, setFormData] = useState<LoginFormModel>(
    new LoginFormModel({
      stayLogged: JSON.parse(localStorage.getItem("persist") ?? String(false)),
    })
  );

  // Constants
  const { loginUser, errors, setErrors } = useLogin();
  const { update } = useAuthSlice();

  // Other
  useEffect(() => {
    refLogin.current?.focus();
  }, []);

  const handleOnChangeLogin = () => {
    if (errors.login !== "") {
      resetError("login");
    }
  };

  const handleOnBlurLogin = (e: FocusEvent<HTMLInputElement, Element>) => {
    const { value, name } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnChangePassword = () => {
    if (errors.password !== "") {
      resetError("password");
    }
  };

  const handleOnBlurPassword = (e: FocusEvent<HTMLInputElement, Element>) => {
    const { value, name } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnCheckedChange = (state: Checkbox.CheckedState) => {
    const value: boolean = state as boolean;

    setFormData((prev) => ({ ...prev, stayLogged: value }));
    localStorage.setItem("persist", JSON.stringify(value));
  };

  const handleAction = async (data: FormData) => {
    const result = await validateLoginForm(formData);

    if (JSON.stringify(result) !== JSON.stringify(new LoginFormErrorModel())) {
      setErrors(result);
      refErrorMessage.current?.focus();
    } else {
      const response = await loginUser(data);

      if (response) {
        update({
          uuid: response.uuid,
          login: response.login,
          userRoles: response.userRoles,
          accessToken: response.accessToken,
        });
      } else {
        refErrorMessage.current?.focus();
      }
    }
  };

  const resetError = (name: keyof LoginFormErrorModel) => {
    if (errors[name] !== "") {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (errors.main !== "") {
      setErrors((prev) => ({ ...prev, main: "" }));
    }
  };

  return (
    <section>
      <div className="flex flex-col items-center">
        <AppFormHeading>Přihlášení</AppFormHeading>
        <AppFormError ref={refErrorMessage}>{errors.main}</AppFormError>

        <AppForm handleAction={handleAction}>
          <AppTextField
            ref={refLogin}
            value={formData.login}
            name="login"
            label="Uživatelské jméno"
            className="mb-3"
            required
            error={!!errors.login}
            helperText={errors.login}
            autoComplete="username"
            onChange={handleOnChangeLogin}
            onBlur={handleOnBlurLogin}
          />

          <AppPasswordField
            value={formData.password}
            name="password"
            label="Heslo"
            className="mb-3"
            required
            error={!!errors.password}
            helperText={errors.password}
            autoComplete="current-password"
            onChange={handleOnChangePassword}
            onBlur={handleOnBlurPassword}
          />

          <div className="flex items-center justify-between mb-3">
            <div>
              <AppHoverCard
                trigger={
                  <AppCheckbox
                    checked={formData.stayLogged}
                    name="stayLogged"
                    label="Zůstat přihlášený"
                    onCheckedChange={handleOnCheckedChange}
                  />
                }
                content={"Odškrtněte, pokud jste na veřejném počítači"}
              />
            </div>

            <p>
              <AppAnchor href={"#"}>Zapomněli jste heslo?</AppAnchor>
            </p>
          </div>

          <AppSubmitButton className="w-full" variant="contained">
            Přihlásit
          </AppSubmitButton>
        </AppForm>
      </div>
    </section>
  );
};

export default LoginForm;
