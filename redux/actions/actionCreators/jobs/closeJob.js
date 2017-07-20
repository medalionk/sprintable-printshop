import axios from 'axios';
import {
  CLOSE_JOB_START,
  CLOSE_JOB_SUCCESS,
  CLOSE_JOB_FAILURE,
} from '../../actionTypes';
import { API_URL } from '../../../../config/constants';

export const closeJob = (id) => (dispatch, getState) => {
  console.log('close job start');
  dispatch({
    type: CLOSE_JOB_START,
    id,
  });
  
  return axios({
    method: 'patch',
    url: `${API_URL}/jobs/${id}/close`,
  })
  .then(({data}) => {
    console.log('close job success: ', data);
    dispatch({
      type: CLOSE_JOB_SUCCESS,
      data
    });
  }, (error) => {
    console.log('close job failure: ', error);
    dispatch({
      type: CLOSE_JOB_FAILURE,
      error
    });
  });
}
