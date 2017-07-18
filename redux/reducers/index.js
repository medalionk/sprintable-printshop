import { combineReducers } from 'redux';
import AuthReducer from './Auth';
import JobsReducer from './Jobs';

const rootReducer = combineReducers({
  auth: AuthReducer,
  jobs: JobsReducer,
});

export default rootReducer;