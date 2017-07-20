import {
  FETCH_JOBS_START,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
  FETCH_JOB_START,
  FETCH_JOB_SUCCESS,
  FETCH_JOB_FAILURE,
  FETCH_WIP_START,
  FETCH_WIP_SUCCESS,
  FETCH_WIP_FAILURE,
  ACCEPT_JOB_START,
  ACCEPT_JOB_SUCCESS,
  ACCEPT_JOB_FAILURE,
  REJECT_JOB_START,
  REJECT_JOB_SUCCESS,
  REJECT_JOB_FAILURE,
  CLOSE_JOB_START,
  CLOSE_JOB_SUCCESS,
  CLOSE_JOB_FAILURE,
} from '../actions/actionTypes';

const initialState = {
   id: '',
  data: {},
  dataFetched: false,
  isFetching: false,
  error: false
}

export const JobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_JOBS_START':
    case 'FETCH_JOB_START':
    case 'FETCH_WIP_START':
      return {
        ...state,                   
        data: [],
        isFetching: true              
      };
    case 'FETCH_JOBS_SUCCESS':
    case 'FETCH_JOB_SUCCESS':
    case 'FETCH_WIP_SUCCESS':
      return {
        ...state,
        isFetching: false,
        data: action.data
      };
    case 'FETCH_JOBS_FAILURE':
    case 'FETCH_JOB_FAILURE':
    case 'FETCH_WIP_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state;
    }
};

export const JobActionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ACCEPT_JOB_START':
    case 'REJECT_JOB_START':
    case 'CLOSE_JOB_START':
      return {
        ...state,                   
        id: action.id, 
        isAccepting: true,            
      };
    case 'ACCEPT_JOB_SUCCESS':
    case 'REJECT_JOB_SUCCESS':
    case 'CLOSE_JOB_SUCCESS':
      return {
        ...state,
        data: action.data,
        isAccepting: false,
        accepted: true,
      };
    case 'ACCEPT_JOB_FAILURE':
    case 'REJECT_JOB_FAILURE':
    case 'CLOSE_JOB_FAILURE':
      return {
        ...state,
        error: true
      };
    default:
      return state;
    }
};

