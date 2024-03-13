import { UserRoleEnum } from "@repo/shared/enums";

interface Login {
  uuid: string;
  login: string;
  userRoles: UserRoleEnum[];
  accessToken: string;
}

export default Login;
