import {SET_INTERNET_CONNECTION} from '../actions/types';

const initialState = {
  isConnected: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_INTERNET_CONNECTION:
      return {...state, isConnected: action.payload};
    default:
      return state;
  }
};
