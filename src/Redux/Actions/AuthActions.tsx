export const LoginWithEmailAction = (data: any) => {
  return {
    type: "LOGIN_USER",
    payload: data,
  };
};

export const LogoutAction = (data: any) => {
  return {
    type: "LOGOUT_USER",
    payload: data,
  };
};
