import { ChangeEvent, FocusEvent, useEffect, useRef, useState } from "react";

import * as Checkbox from "@radix-ui/react-checkbox";
import { nameof } from "@repo/shared/helpers";
import { RegisterFormErrorModel, RegisterFormModel } from "@repo/shared/models";
import { validateLogin, validateRegisterForm } from "@repo/shared/validations";
import {
  AppButtonSubmit,
  AppCheckbox,
  AppFormError,
  AppFormHeading,
  AppTextField,
} from "@repo/ui/styledComponents";

import useRegister from "../../../../shared/api/apiHooks/auth/useRegister";
import AppForm from "../../../../shared/components/form/AppForm";
import AppConfirmPassword from "./confirmPassword/AppConfirmPassword";
import LoginDescribedByArea from "./loginDescribedByArea/LoginDescribedByArea";

const RegisterForm = () => {
  // References
  const refLogin = useRef<HTMLInputElement>(null);
  const refErrorMessage = useRef<HTMLParagraphElement>(null);

  // State
  const [formData, setFormData] = useState<RegisterFormModel>(
    new RegisterFormModel()
  );

  const [loginFocus, setLoginFocus] = useState<boolean>(false);
  const [loginValid, setLoginValid] = useState<boolean>(false);

  // Constants
  const { registerUser, errors, setErrors } = useRegister();

  // Other
  useEffect(() => {
    refLogin.current?.focus();
  }, []);

  const handleOnChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    const valid = validateLogin(value);
    setLoginValid(valid);

    resetError("login");
  };

  const handleOnChangeEmail = () => {
    resetError("email");
  };

  const handleOnBlurEmail = (e: FocusEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnCheckedChangeTerms = (state: Checkbox.CheckedState) => {
    const value: boolean = state as boolean;

    setFormData((prev) => ({ ...prev, termsAgreement: value }));
    localStorage.setItem("persist", JSON.stringify(value));
  };

  const handleRegisterAction = async (data: FormData) => {
    const result = await validateRegisterForm(formData);

    if (
      JSON.stringify(result) !== JSON.stringify(new RegisterFormErrorModel())
    ) {
      setErrors(result);
      refErrorMessage.current?.focus();
    } else {
      const response = await registerUser(data);

      if (response) {
        // update({
        //   uuid: response.uuid,
        //   login: response.login,
        //   userRoles: response.userRoles,
        //   accessToken: response.accessToken,
        // });
      } else {
        refErrorMessage.current?.focus();
      }
    }
  };

  const resetError = (name: keyof RegisterFormErrorModel) => {
    if (errors[name] !== "") {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (errors.main !== "") {
      setErrors((prev) => ({ ...prev, main: "" }));
    }
  };

  // TODO: Zkusit se n2kde zagistrovat, co to nap93e za hlasku. Ale asi me to pak p5esm2ruje na login a nap93e hlasku, 6e jsem byl uspesn2 registrovan7 a muzu se prihlasit a prijde mi email
  // TODO: Pri registraci mi to mus9 hlasit, 6e email a uder name jisz existuje. Hledqbi v dbd podle videa na yutube
  return (
    <section>
      <div className="flex flex-col items-center">
        <AppFormHeading>Registrace</AppFormHeading>
        <AppFormError ref={refErrorMessage}>{errors.main}</AppFormError>

        <AppForm handleAction={handleRegisterAction}>
          <AppTextField
            ref={refLogin}
            value={formData.login}
            name={nameof<RegisterFormModel>("login")}
            label="Uživatelské jméno"
            required
            className="mb-3"
            error={!!errors.login}
            helperText={errors.login}
            autoComplete="off"
            ariaDescribedBy="loginNote"
            ariaDescribedByContent={
              <LoginDescribedByArea login={formData.login} />
            }
            ariaDescribedByDisplay={
              !!formData.login && loginFocus && !loginValid
            }
            onChange={handleOnChangeLogin}
            onBlur={() => setLoginFocus(false)}
            onFocus={() => setLoginFocus(true)}
          />

          <AppTextField
            value={formData.email}
            name={nameof<RegisterFormModel>("email")}
            label="Email"
            type="email"
            required
            className="mb-3"
            error={!!errors.email}
            helperText={errors.email}
            autoComplete="email"
            onChange={handleOnChangeEmail}
            onBlur={handleOnBlurEmail}
          />

          <AppConfirmPassword
            password={formData.password}
            confirmPassword={formData.confirmPassword}
            errors={errors}
            setFormData={setFormData}
            resetError={resetError}
          />

          <AppCheckbox
            checked={formData.termsAgreement}
            name={nameof<RegisterFormModel>("termsAgreement")}
            label="Souhlasím s podmínkami použití a ochranou osobních údajů"
            onCheckedChange={handleOnCheckedChangeTerms}
            className="mb-3"
          />

          <AppButtonSubmit className="w-full" variant="contained">
            Registrovat
          </AppButtonSubmit>
        </AppForm>
      </div>
    </section>
  );
};

export default RegisterForm;
