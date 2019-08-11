import { initialState } from './rootReducer';
import { POI_FETCH_CALLBACK } from '../actions/jogglAppActions';

export default function jogglApp(state = initialState.jogglApp, action) {
  let newState;
  switch(action.type) {
    case POI_FETCH_CALLBACK:
      newState = {
        ...state,
        poi: action.data
      }
      return newState;
    default:
      return state;
  }
}