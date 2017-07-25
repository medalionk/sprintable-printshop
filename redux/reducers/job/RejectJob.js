import {
  REJECT_JOB_START,
  REJECT_JOB_SUCCESS,
  REJECT_JOB_FAILURE,
} from '../../actions/actionTypes';

const initialState = {
  id: '',
  data: {},
  isRejecting: false,
  rejected: false,
  error: false
}

export const RejectJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REJECT_JOB_START':
      return {
        ...state,                   
        id: action.id, 
        isRejecting: true,            
      };
    case 'REJECT_JOB_SUCCESS':
      return {
        ...state,
        data: action.data,
        isRejecting: false,
        rejected: true,
      };
    case 'REJECT_JOB_FAILURE':
      return {
        ...state,
        isRejecting: false,
        error: true
      };
    default:
      return state;
    }
};