import {
  FETCH_WIP_START,
  FETCH_WIP_SUCCESS,
  FETCH_WIP_FAILURE,
} from '../../actions/actionTypes';

const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
}

export const FetchWIPReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_WIP_START':
      return {
        ...state,                   
        data: {},
        isFetching: true              
      };
    case 'FETCH_WIP_SUCCESS':
      return {
        ...state,
        isFetching: false,
        dataFetched: true,
        data: action.data
      };
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