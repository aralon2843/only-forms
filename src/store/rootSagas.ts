import { all } from 'redux-saga/effects';
import loginSaga from './login/sagas';
import { getDoctorsSaga, getRecordsSaga } from './profile/sagas';
import signUpSaga from './signup/sagas';

export default function* rootSagas() {
  yield all([loginSaga(), getDoctorsSaga(), getRecordsSaga(), signUpSaga()]);
}
