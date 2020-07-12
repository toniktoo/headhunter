import { combineReducers } from 'redux';
import { reducerJobs } from './reducers/jobs';
import { reducerUtils } from './reducers/utils';

export const rootReducer = combineReducers({
  reducerJobs,
  reducerUtils,
});
