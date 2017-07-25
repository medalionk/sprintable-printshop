import {
  ACCEPT_JOB_START,
  ACCEPT_JOB_SUCCESS,
  ACCEPT_JOB_FAILURE,
} from '../../actions/actionTypes';

const initialState = {
  id: '',
  data: {},
  isAccepting: false,
  accepted: false,
  error: false
}

export const AcceptJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ACCEPT_JOB_START':
      return {
        ...state,                   
        id: action.id, 
        isAccepting: true,            
      };
    case 'ACCEPT_JOB_SUCCESS':
      return {
        ...state,
        data: action.data,
        isAccepting: false,
        accepted: true,
      };
    case 'ACCEPT_JOB_FAILURE':
      return {
        ...state,
        isAccepting: false,
        error: true
      };
    default:
      return state;
    }
};