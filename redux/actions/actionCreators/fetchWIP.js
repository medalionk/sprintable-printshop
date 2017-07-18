import axios from 'axios';
import {
  FETCH_WIP_START,
  FETCH_WIP_SUCCESS,
  FETCH_WIP_FAILURE,
} from '../actionTypes';
import { API_URL } from '../../../config/constants';

export const fetchWIP = () => (dispatch, getState) => {
  console.log('fetch wip start');
  dispatch({type: FETCH_WIP_START});
  
  return axios({
    method: 'get',
    url: `${API_URL}`,
  })
  .then(({data}) => {
    console.log('fetch wip success: ', data);
    dispatch({
      type: FETCH_WIP_SUCCESS,
      data
    });
  }, (error) => {
    console.log('fetch wip failure: ', error);
    dispatch({
      type: FETCH_WIP_FAILURE,
      error
    });
  });
}
