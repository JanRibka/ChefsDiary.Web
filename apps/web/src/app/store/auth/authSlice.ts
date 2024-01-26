import UserRoleEnum from '';

export interface AuthSlice {
  idUser: number;
  userName: string;
  password: string;
  userRole: UserRoleEnum;
  accessToken: string;
}

export const initialState: AuthSlice = {
    idUser: 0,
    userName: "",
    password: "",
    userRole: 
}
