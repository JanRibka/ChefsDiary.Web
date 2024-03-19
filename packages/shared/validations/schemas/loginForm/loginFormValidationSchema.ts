import { object, string } from "yup";

import { getErrorTextByKey } from "../../../errorLibrary";
import { RegisterFormModel } from "../../../models";

const loginFormValidationSchema = object<RegisterFormModel>().shape({
  login: string().required(getErrorTextByKey("loginRequired")),
  password: string().required(getErrorTextByKey("passwordRequired")),
});

export default loginFormValidationSchema;
