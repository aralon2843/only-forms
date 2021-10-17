import { ILoginUser } from '../../interfaces/login';

export interface LoginState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string | null;
}

export enum LoginActionTypes {
  LOGIN_USER = 'LOGIN_USER',
  LOGIN_USER_SUCCESS = ' LOGIN_USER_SUCCESS',
  LOGIN_USER_FAILURE = ' LOGIN_USER_FAILURE',
}

export interface LoginUser {
  type: LoginActionTypes.LOGIN_USER;
  payload: ILoginUser;
}

interface LoginUserSuccess {
  type: LoginActionTypes.LOGIN_USER_SUCCESS;
  // payload:
}

interface LoginUserFailure {
  type: LoginActionTypes.LOGIN_USER_FAILURE;
  payload: string;
}

export type LoginUserAction = LoginUser | LoginUserSuccess | LoginUserFailure;
