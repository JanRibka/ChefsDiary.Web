import { FocusEvent, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import * as Checkbox from "@radix-ui/react-checkbox";
import { nameof } from "@repo/shared/helpers";
import { useToggle } from "@repo/shared/hooks";
import { LoginFormErrorModel, LoginFormModel } from "@repo/shared/models";
import { validateLoginForm } from "@repo/shared/validations";

import AppSubmitButton from "../../../../../../../packages/ui/components/submitButton/AppSubmitButton";
import { AppRoutes } from "../../../../app/routes/appRoutes";
import { useAuthSlice } from "../../../../app/store/auth/useAuthSlice";
import useLogin from "../../../../shared/api/apiHooks/auth/useLogin";
import AppForm from "../../../../shared/components/form/AppForm";
import AppAnchor from "../../../../shared/styledComponents/anchor/AppAnchor";
import AppCheckbox from "../../../../shared/styledComponents/checkbox/AppCheckbox";
import AppFormError from "../../../../shared/styledComponents/formError/AppFormError";
import AppFormHeading from "../../../../shared/styledComponents/formHeading/AppFormHeading";
import AppHoverCard from "../../../../shared/styledComponents/hoverCard/AppHoverCard";
import AppPasswordField from "../../../../shared/styledComponents/passwordField/AppPasswordField";
import AppTextField from "../../../../shared/styledComponents/textField/AppTextField";

//TODO: Pokud stisknu enter, m2l by se zmacknout cudl pro prihlaseni
// TODO: Predelat state pro inputy podle https://www.youtube.com/watch?v=eQrbjvn_fSc&list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd&index=7&ab_channel=DaveGray
// TODO: Input buude v ls a musi se zrusit form data
const LoginForm = () => {
  // References
  const refLogin = useRef<HTMLInputElement>(null);
  const refErrorMessage = useRef<HTMLParagraphElement>(null);

  // State
  const [persist, setPersist] = useToggle("persist", false);
  const [formData, setFormData] = useState<LoginFormModel>(
    new LoginFormModel({
      persistLogin: persist,
    })
  );

  // Constants
  const { loginUser, errors, setErrors } = useLogin();
  const { update: updateAuth } = useAuthSlice();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || AppRoutes.Home;

  // Other
  useEffect(() => {
    refLogin.current?.focus();
  }, []);

  const handleOnChangeLogin = () => {
    resetError("login");
  };

  const handleOnBlurLogin = (e: FocusEvent<HTMLInputElement, Element>) => {
    const { value, name } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnChangePassword = () => {
    resetError("password");
  };

  const handleOnBlurPassword = (e: FocusEvent<HTMLInputElement, Element>) => {
    const { value, name } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnCheckedChange = (state: Checkbox.CheckedState) => {
    const value: boolean = state as boolean;

    setFormData((prev) => ({ ...prev, persistLogin: value }));
    setPersist(value);
  };

  const handleLoginAction = async (data: FormData) => {
    const result = await validateLoginForm(formData);

    if (JSON.stringify(result) !== JSON.stringify(new LoginFormErrorModel())) {
      setErrors(result);
      refErrorMessage.current?.focus();
    } else {
      const response = await loginUser(data);

      if (response) {
        updateAuth({
          login: response.login,
          accessToken: response.accessToken,
        });

        setFormData(new LoginFormModel());

        navigate(from, { replace: true });
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

        <AppForm handleAction={handleLoginAction}>
          <AppTextField
            ref={refLogin}
            value={formData.login}
            name={nameof<LoginFormModel>("login")}
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
            name={nameof<LoginFormModel>("password")}
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
                    checked={formData.persistLogin}
                    name={nameof<LoginFormModel>("persistLogin")}
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
