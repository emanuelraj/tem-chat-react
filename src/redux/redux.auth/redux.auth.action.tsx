export const SET_LOGIN_RESPONSE = 'AUTH/SET_USER_DETAILS';

export const loginAction = (loginDetails: any) => (dispatch: any) => {
  return dispatch({ type: SET_LOGIN_RESPONSE, payload: loginDetails });
};