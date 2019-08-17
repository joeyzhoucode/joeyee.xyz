import { initialState } from './rootReducer';
import { GYMS_FETCH_CALLBACK } from '../actions/energeeAppActions';

export default function energeeApp(state = initialState.energeeApp, action) {
  let newState;
  switch(action.type) {
    case GYMS_FETCH_CALLBACK:
      newState = {
        ...state,
        gyms: action.data
      }
      return newState;
    default:
      return state;
  }
}