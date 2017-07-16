import {
  INITIALIZE_SESSION,
  RESET_SESSION,
  LOGIN,
  LOGOUT, 
  AUTH_REQUEST_START,
  AUTH_REQUEST_SUCCESS,
  AUTH_REQUEST_FAILURE,
} from '../actionTypes';

const createPayloadForwardingAction = (type) => (payload) =>
  ({type: type, payload: payload});

export const initializeSession = createPayloadForwardingAction(INITIALIZE_SESSION);
export const resetSession = createPayloadForwardingAction(RESET_SESSION);
export const login = createPayloadForwardingAction(LOGIN);
export const logout = createPayloadForwardingAction(LOGOUT);