import { combineReducers } from 'redux';
import famousPersonReducer from './famousPersonReducer';

export default combineReducers({
  famousPersonReducer: famousPersonReducer
});
