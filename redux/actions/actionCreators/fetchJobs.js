import axios from 'axios';
import {
  FETCH_JOBS_START,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
} from '../actionTypes';
import { API_URL } from '../../../config/constants';

export const fetchJobs = () => (dispatch, getState) => {
  console.log('fetch jobs start');
  dispatch({type: FETCH_JOBS_START});
  
  return axios({
    method: 'get',
    url: `${API_URL}/jobs`,
  })
  .then(({data}) => {
    console.log('fetch jobs success: ', data);
    dispatch({
      type: FETCH_JOBS_SUCCESS,
      data
    });
  }, (error) => {
    console.log('fetch jobs failure: ', error);
    dispatch({
      type: FETCH_JOBS_FAILURE,
      error
    });
  });
}
