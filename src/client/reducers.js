import { combineReducers } from 'redux-immutable';

import { appReducer } from './modules/App/State';

const Reducers = combineReducers({
  app:          appReducer,
})

export default Reducers;
