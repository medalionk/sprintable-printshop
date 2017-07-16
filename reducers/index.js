import { combineReducers } from 'redux';
import AuthReducer from './Auth';

// export {
//   counter,
//   NavigatorReducer,
//   AuthReducer,
// };

const rootReducer = combineReducers({
  auth: AuthReducer,
});

export default rootReducer;