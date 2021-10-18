export interface IDoctor {
  id?: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
}

export interface IRecord {
  id?: number;
  name: string;
  phone: string;
  doctor: IDoctor;
  date: string;
  isChild: boolean;
}

export interface ProfileState {
  doctors: Array<IDoctor> | null;
  records: Array<IRecord> | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string | null;
}

export enum ProfileActionTypes {
  GET_DOCTORS = 'GET_DOCTORS',
  GET_DOCTORS_SUCCESS = ' GET_DOCTORS_SUCCESS',
  GET_DOCTORS_FAILURE = ' GET_DOCTORS_FAILURE',

  GET_RECORDS = 'GET_RECORDS',
  GET_RECORDS_SUCCESS = 'GET_RECORDS_SUCCESS',
  GET_RECORDS_FAILURE = 'GET_RECORDS_FAILURE',
}

export interface GetDoctors {
  type: ProfileActionTypes.GET_DOCTORS;
  payload: string;
}

export interface GetDoctorsSuccess {
  type: ProfileActionTypes.GET_DOCTORS_SUCCESS;
  payload: Array<IDoctor>;
}

export interface GetDoctorsFailure {
  type: ProfileActionTypes.GET_DOCTORS_FAILURE;
  payload: string;
}

export interface GetRecords {
  type: ProfileActionTypes.GET_RECORDS;
  payload: string;
}

export interface GetRecordsSuccess {
  type: ProfileActionTypes.GET_RECORDS_SUCCESS;
  payload: Array<IRecord>;
}

export interface GetRecordsFailure {
  type: ProfileActionTypes.GET_RECORDS_FAILURE;
  payload: string;
}

export type ProfileAction =
  | GetDoctors
  | GetDoctorsSuccess
  | GetDoctorsFailure
  | GetRecords
  | GetRecordsSuccess
  | GetRecordsFailure;
