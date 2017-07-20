import axios from 'axios';
import {
  REJECT_JOB_START,
  REJECT_JOB_SUCCESS,
  REJECT_JOB_FAILURE,
} from '../../actionTypes';
import { API_URL } from '../../../../config/constants';

export const rejectJob = (id) => (dispatch, getState) => {
  console.log('reject job start');
  dispatch({
    type: REJECT_JOB_START,
    id,
  });
  
  return axios({
    method: 'patch',
    url: `${API_URL}/jobs/${id}/reject`,
  })
  .then(({data}) => {
    console.log('reject job success: ', data);
    dispatch({
      type: REJECT_JOB_SUCCESS,
      data
    });
  }, (error) => {
    console.log('reject job failure: ', error);
    dispatch({
      type: REJECT_JOB_FAILURE,
      error
    });
  });
}
