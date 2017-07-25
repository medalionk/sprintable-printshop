import {
  FETCH_JOB_START,
  FETCH_JOB_SUCCESS,
  FETCH_JOB_FAILURE,
} from '../../actions/actionTypes';

const initialState = {
  data: {},
  dataFetched: false,
  isFetching: false,
  error: false
}

export const FetchJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_JOB_START':
      return {
        ...state,                   
        data: {},
        isFetching: true              
      };
    case 'FETCH_JOB_SUCCESS':
      return {
        ...state,
        isFetching: false,
        dataFetched: true,
        data: action.data
      };
    case 'FETCH_JOB_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state;
    }
};