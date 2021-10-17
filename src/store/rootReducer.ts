import { combineReducers } from 'redux';
import loginReducer from './login/reducer';
import profileReducer from './profile/reducer';
import signUpReducer from './signup/reducer';

export default combineReducers({
  login: loginReducer,
  profile: profileReducer,
  signup: signUpReducer,
});
