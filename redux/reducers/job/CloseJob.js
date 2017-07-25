import {
  CLOSE_JOB_START,
  CLOSE_JOB_SUCCESS,
  CLOSE_JOB_FAILURE,
} from '../../actions/actionTypes';

const initialState = {
  id: '',
  data: {},
  isClosing: false,
  closed: false,
  error: false
}

export const CloseJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLOSE_JOB_START':
      return {
        ...state,                   
        id: action.id, 
        isClosing: true,            
      };
    case 'CLOSE_JOB_SUCCESS':
      return {
        ...state,
        data: action.data,
        isClosing: false,
        closed: true,
      };
    case 'CLOSE_JOB_FAILURE':
      return {
        ...state,
        isClosing: false,
        error: true
      };
    default:
      return state;
    }
};