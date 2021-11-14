import {combineReducers} from 'redux';
import IAppState from '../types/IAppState';
import BreedsReducers from "./breeds/BreedsReducers";

const defaultState: IAppState = {
  breedState:{breeds:[]}
};
function createReducer(initialState: any, handlers: any) {
  return function reducer(state = initialState, action: any) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}
const breedsReducers = createReducer(defaultState.breedState, BreedsReducers);

const AppReducer = combineReducers({
  breedState:breedsReducers
});

export default AppReducer;
