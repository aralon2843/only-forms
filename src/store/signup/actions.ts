import ISignUpUser from '../../interfaces/signup';
import { SignUpUserActionTypes, SignUpUserAction } from './types';

export const signUpUser = (payload: ISignUpUser): SignUpUserAction => {
  return {
    type: SignUpUserActionTypes.SIGNUP_USER,
    payload,
  };
};

export const signUpUserUserSuccess = (): SignUpUserAction => {
  return {
    type: SignUpUserActionTypes.SIGNUP_USER_SUCCESS,
  };
};

export const signUpUserUserFailure = (payload: string): SignUpUserAction => {
  return {
    type: SignUpUserActionTypes.SIGNUP_USER_FAILURE,
    payload,
  };
};
