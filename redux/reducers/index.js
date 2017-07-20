import { combineReducers } from 'redux';
import AuthReducer from './Auth';
import {
  JobsReducer, 
  JobActionReducer,
} from './Jobs';

const rootReducer = combineReducers({
  auth: AuthReducer,
  jobs: JobsReducer,
  action: JobActionReducer,
  accept: AcceptJobReducer,
});

export default rootReducer;