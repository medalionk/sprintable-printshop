import axios from 'axios';
import {
  ACCEPT_JOB_START,
  ACCEPT_JOB_SUCCESS,
  ACCEPT_JOB_FAILURE,
} from '../../actionTypes';
import { API_URL } from '../../../../config/constants';

export const acceptJob = (id) => (dispatch, getState) => {
  console.log('accept job start');
  dispatch({
    type: ACCEPT_JOB_START,
    id,
  });
  
  return axios({
    method: 'post',
    url: `${API_URL}/jobs/${id}/accept`,
  })
  .then(({data}) => {
    console.log('accept job success: ', data);
    dispatch({
      type: ACCEPT_JOB_SUCCESS,
    });
  }, (error) => {
    console.log('accept job failure: ', error);
    dispatch({
      type: ACCEPT_JOB_FAILURE,
      error
    });
  });
}
