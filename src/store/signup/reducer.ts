import { SignUpUserState, SignUpUserAction, SignUpUserActionTypes } from "./types";

const initialState: SignUpUserState = {
  status: 'idle',
  error: null,
};

const signUpReducer = (state = initialState, action: SignUpUserAction): SignUpUserState => {
  switch (action.type) {
    case SignUpUserActionTypes.SIGNUP_USER:
      return {
        ...state,
        status: 'loading',
      };
    case SignUpUserActionTypes.SIGNUP_USER_SUCCESS:
      return {
        ...state,
        status: 'succeeded',
      };
    case SignUpUserActionTypes.SIGNUP_USER_FAILURE:
      return {
        status: 'failed',
        error: action.payload,
      };

    default:
      return state;
  }
};

export default signUpReducer;
