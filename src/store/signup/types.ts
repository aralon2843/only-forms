import ISignUpUser from '../../interfaces/signup';

export interface SignUpUserState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string | null;
}

export enum SignUpUserActionTypes {
  SIGNUP_USER = 'SIGNUP_USER',
  SIGNUP_USER_SUCCESS = ' SIGNUP_USER_SUCCESS',
  SIGNUP_USER_FAILURE = ' SIGNUP_USER_FAILURE',
}

export interface SignUpUser {
  type: SignUpUserActionTypes.SIGNUP_USER;
  payload: ISignUpUser;
}

interface SignUpUserSuccess {
  type: SignUpUserActionTypes.SIGNUP_USER_SUCCESS;
}

interface SignUpUserFailure {
  type: SignUpUserActionTypes.SIGNUP_USER_FAILURE;
  payload: string;
}

export type SignUpUserAction =
  | SignUpUser
  | SignUpUserSuccess
  | SignUpUserFailure;
