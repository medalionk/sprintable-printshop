import { combineReducers } from 'redux';
import AuthReducer from './Auth';
import JobsReducer from './Jobs';
import WIPReducer from './WIP';

const rootReducer = combineReducers({
  auth: AuthReducer,
  jobs: JobsReducer,
  wip: WIPReducer,
});

export default rootReducer;