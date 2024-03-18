import { ChangeEvent, FocusEvent, useEffect, useRef, useState } from "react";

import { RegisterFormErrorModel, RegisterFormModel } from "@repo/shared/models";
import { validateLogin, validateRegisterForm } from "@repo/shared/validations";

import useRegister from "../../../../shared/api/apiHooks/auth/useRegister";
import AppForm from "../../../../shared/components/form/AppForm";
import AppSubmitButton from "../../../../shared/components/submitButton/AppSubmitButton";
import AppConfirmPassword from "../../../../shared/styledComponents/confirmPassword/AppConfirmPassword";
import AppTextField from "../../../../shared/styledComponents/textField/AppTextField";
import LoginDescribedByArea from "./loginDescribedByArea/LoginDescribedByArea";

// TODO:Pokud smazu napr jenom email, smaze s emi erro pouze pro email, ne pro vsechno + hlavni chyba se smaze
// TODO: pOKUD JSou vsechny podminky splneny u popisku napr u hesla, tak ten popisek hned zmizne, proto6e pak nejde kliknout na registrovat
// TODO: Odjebat z popisku hesla specialni znaky
const RegisterForm = () => {
  // References
  const refLogin = useRef<HTMLInputElement>(null);
  const refErrorMessage = useRef<HTMLParagraphElement>(null);

  // State
  const [formData, setFormData] = useState<RegisterFormModel>(
    new RegisterFormModel()
  );
  const [errors, setErrors] = useState<RegisterFormErrorModel>(
    new RegisterFormErrorModel()
  );
  const [loginFocus, setLoginFocus] = useState<boolean>(false);
  const [loginValid, setLoginValid] = useState<boolean>(false);

  // Constants
  const { registerUser, errorMessage } = useRegister();

  // Other
  useEffect(() => {
    refLogin.current?.focus();
  }, []);

  const handleAction = async (data: FormData) => {
    const result = await validateRegisterForm(formData);

    if (result) {
      setErrors(result);
    } else {
      const response = await registerUser(data);

      if (response) {
        // update({
        //   uuid: response.uuid,
        //   login: response.login,
        //   userRoles: response.userRoles,
        //   accessToken: response.accessToken,
        // });
      }
    }
    // const isValid = validateRegisterForm(data);
    // if (isValid) {
    //   console.log("Form is valid");
    // } else {
    //   console.log("Form is not valid");
    // }
    // const response = await registerUser(data);
    // if (response) {
    //   // update({
    //   //   uuid: response.uuid,
    //   //   login: response.login,
    //   //   userRoles: response.userRoles,
    //   //   accessToken: response.accessToken,
    //   // });
    //   // TODO: Tady bude jest2 validace a pokud neco nebude validn9 tak ze zobraz9 hl83ka u dan0ho inputu
    //   // TODO: Po prihlaseni presmerobvat na login a zobrazit hl83ku ze refggistrace byla cajk
    //   // TODO: Na cudlu nebude disable, ale bude se validovat po kliku na cudl
    // } else {
    //   refErrorMessage.current?.focus();
    // }
  };

  const handleOnChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (loginValid) {
      const valid = validateLogin(value);

      setLoginValid(valid);
    }
  };

  const handleOnBlurLogin = () => {
    setLoginFocus(false);

    const valid = validateLogin(formData.login);

    setLoginValid(valid);
  };

  const handleOnBlurEmail = (e: FocusEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetError = (name: keyof RegisterFormErrorModel) => {
    if (errors[name] !== "") {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    // TODO: Dodelat if pro reset hlavni erorove hlasky
  };
  // TODO: Dat form do spolecne komponenty
  // TODO: D8t nadpis a hlavni erorovou hl83ku do styled komponenty a pou6ivat ji vsude
  // TODO: Zkusit se n2kde zagistrovat, co to nap93e za hlasku. Ale asi me to pak p5esm2ruje na login a nap93e hlasku, 6e jsem byl uspesn2 registrovan7 a muzu se prihlasit a prijde mi email
  // TODO: Pri registraci mi to mus9 hlasit, 6e email a uder name jisz existuje. Hledqbi v dbd podle videa na yutube
  return (
    <section>
      <div className="flex flex-col items-center">
        <h3 className="!text-3xl mb-7">Registrace</h3>
        {errorMessage && (
          <p
            ref={refErrorMessage}
            className="text-center text-error border-error border-1 rounded-sm p-2.5 mb-3 w-full text-sm bg-red-100 transition-all"
          >
            {errorMessage}
          </p>
        )}

        <AppForm handleAction={handleAction}>
          <AppTextField
            ref={refLogin}
            value={formData.login}
            name="login"
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
            onBlur={handleOnBlurLogin}
            onFocus={() => setLoginFocus(true)}
          />

          <AppTextField
            value={formData.email}
            name="email"
            label="Email"
            type="email"
            required
            className="mb-3"
            error={!!errors.email}
            helperText={errors.email}
            autoComplete="email"
            onBlur={handleOnBlurEmail}
          />

          <AppConfirmPassword
            password={formData.password}
            setFormData={setFormData}
            passwordErrorMessage={errors.password}
            confirmPassword={formData.confirmPassword}
            confirmPasswordErrorMessage={errors.confirmPassword}
          />

          <AppSubmitButton className="w-full" variant="contained">
            Registrovat
          </AppSubmitButton>
        </AppForm>
      </div>
    </section>
  );
};

export default RegisterForm;
