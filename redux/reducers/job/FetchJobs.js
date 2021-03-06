import {
  FETCH_JOBS_START,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
} from '../../actions/actionTypes';

const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
}

export const FecthJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_JOBS_START':
      return {
        ...state,                   
        data: [],
        isFetching: true              
      };
    case 'FETCH_JOBS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        dataFetched: true,
        data: action.data
      };
    case 'FETCH_JOBS_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state;
    }
};