import axios from 'axios';
import {
  FETCH_JOBS_START,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
} from '../actionTypes';
import { API_URL } from '../../../config/constants';

export const fetchJobs = () => (dispatch, getState) => {
  dispatch({type: FETCH_JOBS_START});
  
  //const url = `${API_URL}/posts`
  
  return axios({
    method: 'get',
    url: `${API_URL}`,
  })
  .then(({data}) => {
    //console.log('successfully fetched posts', data);
    dispatch({
      type: FETCH_JOBS_SUCCESS,
      data
    });
  }, (error) => {
    //console.log('error', error);
    dispatch({
      type: FETCH_JOBS_FAILURE,
      error
    });
  });
}
