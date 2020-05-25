import {LOADING, ERROR, SUCCESS, RESET, SET_DATA} from './types';
import {ErrorType} from '../utils/Errors';

export default class AsyncAction {
  async excute(asyncFunc, dispatch) {
    try {
      dispatch({type: LOADING});
      const data = await asyncFunc(c => (this.cancelAsync = c));
      dispatch({type: SUCCESS, payload: data});
    } catch (error) {
      if (error.type != ErrorType.CANCEL)
        dispatch({type: ERROR, payload: error});
    }
  }

  cancel() {
    if (this.cancelAsync) {
     this.cancelAsync();
    }
  }
  
  reset(dispatch, initialState={}) {
    dispatch({type: RESET, payload: initialState});
  }

  setData(dispatch, data) {
    dispatch({type: SET_DATA, payload: data});
  }
}
