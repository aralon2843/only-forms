import { LoginActionTypes, LoginState, LoginUserAction } from './types';

const initialState: LoginState = {
  status: 'idle',
  error: null,
};

const loginReducer = (state = initialState, action: LoginUserAction): LoginState => {
  switch (action.type) {
    case LoginActionTypes.LOGIN_USER:
      return {
        ...state,
        status: 'loading',
      };
    case LoginActionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        status: 'succeeded',
      };
    case LoginActionTypes.LOGIN_USER_FAILURE:
      return {
        status: 'failed',
        error: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
