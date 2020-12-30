const iState = {
  isLogin: false,
};

export const Reducer = (state = iState, Actions: any) => {
  switch (Actions.type) {
    case "LOGIN_USER": {
      return {
        ...state,
        isLogin: true,
      };
    }
    default:
      return state;
  }
};
