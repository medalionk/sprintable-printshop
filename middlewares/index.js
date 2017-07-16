
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import loggingMiddleware from './loggingMiddleware';

// define store middlewares as an array
export default [
  promiseMiddleware,
  thunkMiddleware,
  loggingMiddleware
];
