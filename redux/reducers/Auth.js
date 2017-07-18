import {
  LOGIN,
  LOGOUT,
} from '../actions/actionTypes'

const initialAuthState = { isLoggedIn: false };

const AuthReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoggedIn: true };
    case LOGOUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}

export default AuthReducer;