import auth              from './auth.reducer';
import transaction       from './transaction.reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  auth,
  transaction,
});

export default rootReducer;