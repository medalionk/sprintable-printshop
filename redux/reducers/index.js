import { combineReducers } from 'redux';
import AuthReducer from './Auth';
import {
  AcceptJobReducer,
  CloseJobReducer,
  FetchJobReducer,
  FecthJobsReducer,
  FetchWIPReducer,
  RejectJobReducer,
} from './job';

const rootReducer = combineReducers({
  auth: AuthReducer,
  accept: AcceptJobReducer,
  close: CloseJobReducer,
  job: FetchJobReducer,
  jobs: FecthJobsReducer,
  wip: FetchWIPReducer,
  reject: RejectJobReducer,
});

export default rootReducer;