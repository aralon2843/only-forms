import { ProfileAction, ProfileActionTypes, ProfileState } from './types';

const initialState: ProfileState = {
  doctors: null,
  records: null,
  status: 'idle',
  error: null,
};

const profileReducer = (
  state = initialState,
  action: ProfileAction
): ProfileState => {
  switch (action.type) {
    case ProfileActionTypes.GET_DOCTORS:
      return {
        ...state,
        status: 'loading',
      };
    case ProfileActionTypes.GET_DOCTORS_SUCCESS:
      return {
        ...state,
        doctors: action.payload,
        status: 'succeeded',
      };
    case ProfileActionTypes.GET_DOCTORS_FAILURE:
      return {
        ...state,
        status: 'failed',
        error: action.payload,
      };
    case ProfileActionTypes.GET_RECORDS:
      return {
        ...state,
        status: 'loading',
      };
    case ProfileActionTypes.GET_RECORDS_SUCCESS:
      return {
        ...state,
        records: action.payload,
        status: 'succeeded',
      };
    case ProfileActionTypes.GET_RECORDS_FAILURE:
      return {
        ...state,
        status: 'failed',
        error: action.payload,
      };

    default:
      return state;
  }
};

export default profileReducer;
