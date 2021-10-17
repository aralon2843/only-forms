import { call, put, takeLatest } from 'redux-saga/effects';
import registerUser from '../../api/register';
import { signUpUserUserFailure, signUpUserUserSuccess } from './actions';
import { SignUpUser, SignUpUserActionTypes } from './types';

function* signUp(action: SignUpUser) {
  const { payload } = action;
  try {
    yield call(registerUser, payload);
    yield put(signUpUserUserSuccess());
  } catch (e) {
    yield put(signUpUserUserFailure('Не удалось зарегистрировать аккаунт'));
  }
}

export default function* rootSaga() {
  yield takeLatest(SignUpUserActionTypes.SIGNUP_USER, signUp);
}
