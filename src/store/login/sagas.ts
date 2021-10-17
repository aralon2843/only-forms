import { call, put, takeLatest } from 'redux-saga/effects';
import loginUser from '../../api/login';
import { LoginUser } from './types';
import { LoginActionTypes } from '../login/types';
import { loginUserFailure, loginUserSuccess } from './actions';

function* login(action: LoginUser) {
  const { payload } = action;
  try {
    const { accessToken } = yield call(loginUser, payload);
    localStorage.setItem('accessToken', accessToken);
    yield put(loginUserSuccess());
  } catch (e) {
    yield put(loginUserFailure('Пользователь не существует'));
  }
}

export default function* rootSaga() {
  yield takeLatest(LoginActionTypes.LOGIN_USER, login);
}
