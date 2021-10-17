import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchDoctors, fetchRecords } from '../../api/profile';
import {
  fetchDoctorsFailure,
  fetchDoctorsSuccess,
  fetchRecordsFailure,
  fetchRecordsSuccess,
} from './actions';
import { GetDoctors, GetRecords, ProfileActionTypes } from './types';

function* getDoctors(action: GetDoctors) {
  const { payload } = action;
  try {
    const { data } = yield call(fetchDoctors, payload);

    yield put(fetchDoctorsSuccess(data));
  } catch (e) {
    yield put(fetchDoctorsFailure('Ошибка загрузки данных'));
  }
}

function* getRecords(action: GetRecords) {
  const { payload } = action;
  try {
    const { data } = yield call(fetchRecords, payload);
    yield put(fetchRecordsSuccess(data));
  } catch (e) {
    yield put(fetchRecordsFailure('Ошибка загрузки данных'));
  }
}

export function* getDoctorsSaga() {
  yield takeLatest(ProfileActionTypes.GET_DOCTORS, getDoctors);
}

export function* getRecordsSaga() {
  yield takeLatest(ProfileActionTypes.GET_RECORDS, getRecords);
}
