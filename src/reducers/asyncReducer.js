import {LOADING, ERROR, SUCCESS, RESET, SET_DATA} from '../actions/types';

export default (state, action) => {
  switch (action.type) {
    case LOADING:
      return {...state, loading: true, error: null};
    case ERROR:
      return {...state, error: action.payload, loading: false};
    case SUCCESS:
      return {...state, data: action.payload, loading: false, error: null};
    case SET_DATA:
      return {...state, data: action.payload};
    case RESET:
      return action.payload;
    default:
      return state;
  }
};
