import { combineReducers } from 'redux';
import AuthReducer from './Auth';
import JobsReducer from './Jobs';
import WIPReducer from './WIP';
import AcceptJobReducer from './AcceptJob';

const rootReducer = combineReducers({
  auth: AuthReducer,
  jobs: JobsReducer,
  wip: WIPReducer,
  accept: AcceptJobReducer,
});

export default rootReducer;