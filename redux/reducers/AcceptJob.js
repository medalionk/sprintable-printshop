import {
  ACCEPT_JOB_START,
  ACCEPT_JOB_SUCCESS,
  ACCEPT_JOB_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  id: '', 
  isAccepting: false, 
  accepted: false,
  error: false
}

const AcceptJobReducer = (state = initialState, action) => {
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
        isAccepting: false,
        accepted: true,
      };
    case 'ACCEPT_JOB_FAILURE':
      return {
        ...state,
        error: true
      };
    default:
      return state;
    }
};

export default AcceptJobReducer;
