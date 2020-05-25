import {combineReducers} from 'redux';
import network from './networkReducer';
import favorites from './favoriteReducer';

export default combineReducers({
  network,
  favorites
});
