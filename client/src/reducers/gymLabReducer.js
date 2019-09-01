import { initialState } from './rootReducer';
import { GYMS_FETCH_CALLBACK, GYM_SELECT, PROGRAM_SELECT } from '../actions/gymLabActions';

export default function gymLab(state = initialState.gymLab, action) {
  let newState;
  switch(action.type) {
    case GYMS_FETCH_CALLBACK:
      newState = {
        ...state,
        gyms: {
          ...state.gyms,
          list: action.data
        }
      }
      return newState;
    case GYM_SELECT:
      newState = {
        ...state,
      }
      newState.gyms.selected = action.selected;
      return newState;
    case PROGRAM_SELECT:
      newState = {
        ...state,
      }
      newState.programs.selected = action.selected;
      return newState;
    default:
      return state;
  }
}