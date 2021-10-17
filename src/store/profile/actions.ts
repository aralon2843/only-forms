import { IDoctor, IRecord, ProfileAction, ProfileActionTypes } from './types';

export const fetchDoctors = (payload: string): ProfileAction => {
  console.log(payload);
  return {
    type: ProfileActionTypes.GET_DOCTORS,
    payload,
  };
};

export const fetchDoctorsSuccess = (payload: Array<IDoctor>): ProfileAction => {
  return {
    type: ProfileActionTypes.GET_DOCTORS_SUCCESS,
    payload,
  };
};

export const fetchDoctorsFailure = (payload: string): ProfileAction => {
  return {
    type: ProfileActionTypes.GET_DOCTORS_FAILURE,
    payload,
  };
};

export const fetchRecords = (payload: string): ProfileAction => {
  console.log(payload);
  return {
    type: ProfileActionTypes.GET_RECORDS,
    payload,
  };
};

export const fetchRecordsSuccess = (payload: Array<IRecord>): ProfileAction => {
  return {
    type: ProfileActionTypes.GET_RECORDS_SUCCESS,
    payload,
  };
};

export const fetchRecordsFailure = (payload: string): ProfileAction => {
  return {
    type: ProfileActionTypes.GET_RECORDS_FAILURE,
    payload,
  };
};
