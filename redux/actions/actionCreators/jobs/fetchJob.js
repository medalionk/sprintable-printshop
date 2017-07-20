import axios from 'axios';
import {
  FETCH_JOB_START,
  FETCH_JOB_SUCCESS,
  FETCH_JOB_FAILURE,
} from '../../actionTypes';
import { API_URL } from '../../../../config/constants';

export const fetchJob = (id) => (dispatch, getState) => {
  console.log('fetch one job start');
  dispatch({
    type: FETCH_JOB_START,
    id
  });
  
  return axios({
    method: 'get',
    url: `${API_URL}/jobs/${id}`,
  })
  .then(({data}) => {
    console.log('fetch one job success: ', data);
    dispatch({
      type: FETCH_JOB_SUCCESS,
      data
    });
  }, (error) => {
    console.log('fetch one job failure: ', error);
    dispatch({
      type: FETCH_JOB_FAILURE,
      error
    });
  });
}
