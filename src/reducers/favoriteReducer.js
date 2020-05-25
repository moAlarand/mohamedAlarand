import {SET_FAV_MOVIES} from '../actions/types';

const initialState = {
  movies: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FAV_MOVIES:
      return {movies: action.payload};
    default:
      return state;
  }
};
