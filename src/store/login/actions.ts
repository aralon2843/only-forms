import { LoginActionTypes, LoginUserAction } from './types';
import { ILoginUser } from '../../interfaces/login';

export const loginUser = (payload: ILoginUser): LoginUserAction => {
  console.log(payload);
  return {
    type: LoginActionTypes.LOGIN_USER,
    payload,
  };
};

export const loginUserSuccess = (): LoginUserAction => {
  return {
    type: LoginActionTypes.LOGIN_USER_SUCCESS,
  };
};

export const loginUserFailure = (payload: string): LoginUserAction => {
  return {
    type: LoginActionTypes.LOGIN_USER_FAILURE,
    payload,
  };
};
